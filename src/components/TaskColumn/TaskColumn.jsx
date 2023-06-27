import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';
import { CardModalWindow } from '../CardModalWindow/CardModalWindow';
import { useState } from 'react';
import { selectCards } from 'redux/Cards/cardsSelectors';
import shortid from 'shortid';

export const TaskColumn = ({ columnId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const modalWindowClose = () => setModalOpen(false);
  const cards = useSelector(selectCards);
  
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
