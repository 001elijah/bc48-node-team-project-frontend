import PropTypes from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';

import { CardModalWindow } from '../CardModalWindow/CardModalWindow';
import { useEffect, useState } from 'react';
import { getListOfCards } from 'redux/Cards/cardsOperations';
import { useDispatch } from 'react-redux';

export const TaskColumn = ({ columnId, boardId }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const modalWindowClose = () => setModalOpen(false);

  useEffect(() => {
    dispatch(getListOfCards({boardId, columnId}))
  }, [columnId])
  

  return (
    <>
      <ul>
        <TaskCard columnId={columnId} />
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