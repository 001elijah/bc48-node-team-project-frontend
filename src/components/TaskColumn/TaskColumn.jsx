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

export const TaskColumn = ({ columnId }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector(currentBoard);
  const [modalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const modalWindowClose = () => setModalOpen(false);
  const cards = useSelector(selectCards);

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

  return (
    <>
      <ul>
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
        {/* <TaskCard columnId={columnId} /> */}
      </ul>
      <AddButton
        title="Add another card"
        typeOfButton="Card"
        onClick={ModalWindowOpen}
      />
      {modalOpen && (
        <CardModalWindow
          modalTitle="Add card"
          inputTitle="Add card"
          titleModalButton="Add card"
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
