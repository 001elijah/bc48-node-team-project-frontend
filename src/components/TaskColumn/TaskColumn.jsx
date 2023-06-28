import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { CardModalWindow } from '../CardModalWindow/CardModalWindow';
import { useState } from 'react';
import { selectCards } from 'redux/Cards/cardsSelectors';
import { addCard } from 'redux/Cards/cardsOperations';
import shortid from 'shortid';
import { currentBoard } from 'redux/Boards/boardsSelectors';
import s from './TaskColumn.module.scss';
import { selectorTheme } from 'redux/Auth/authSelectors';
import clsx from 'clsx';
import { selectorFilter } from '../../redux/Filter/filterSelection';

export const TaskColumn = ({ columnId }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(currentBoard);
  const theme = useSelector(selectorTheme);
  const [modalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const modalWindowClose = () => setModalOpen(false);
  const allCards = useSelector(selectCards);
  const filter = useSelector(selectorFilter);

  let cards = [];

  if (!filter) {
    cards = allCards;
  } else {
    switch (filter) {
      case 'low':
        cards = allCards.filter(item => item.label === 'low');
        break;
      case 'medium':
        cards = allCards.filter(item => item.label === 'medium');
        break;
      case 'high':
        cards = allCards.filter(item => item.label === 'high');
        break;
      case 'without':
        cards = allCards.filter(item => item.label === 'without');
        break;
      default:
        cards = allCards;
    }
  }

  const handleAddCard = dataForm => {
    const { value, coment, color, date } = dataForm;
    dispatch(
      addCard({
        title: value,
        description: coment,
        deadline: date,
        label: color,
        columnId,
        boardId: _id,
      }),
    );
  };
  // if (cards?.length === 0) return;
  return (
    <>
      <ul
        className={clsx(
          theme === 'light' && s.taskCardListLight,
          theme === 'dark' && s.taskCardListDark,
          theme === 'colorful' && s.taskCardListColorful,
        )}
      >
        {cards
          .filter(card => {
            return card.columnId === columnId;
          })
          .map(task => (
            <TaskCard
              key={shortid.generate()}
              id={task._id}
              title={task.title}
              label={task.label}
              description={task.description}
              deadline={task.deadline}
              boardId={task.boardId}
              columnId={task.columnId}
            />
          ))}
      </ul>
      <AddButton
        title="Add another card"
        typeOfButton="Card"
        onClick={ModalWindowOpen}
      />
      {modalOpen && (
        <CardModalWindow
          modalTitle="Add card"
          titleModalButton="Add"
          handleToggleModal={modalWindowClose}
          onSubmit={handleAddCard}
          // handleToggleModal={ModalWindowClose}
        />
      )}
    </>
  );
};

TaskColumn.propTypes = {
  columnId: PropTypes.string,
  boardId: PropTypes.string,
};
