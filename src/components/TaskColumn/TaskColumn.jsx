import PropTypes from 'prop-types';
import { TaskCard } from '../TaskCard/TaskCard';
import { AddButton } from '../ButtonAddColumn/ButtonAddColumn';

import { CardModalWindow } from '../CardModalWindow/CardModalWindow';
import { useState } from 'react';

export const TaskColumn = ({ columnId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const ModalWindowOpen = () => setModalOpen(true);
  const modalWindowClose = () => setModalOpen(false);

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
};