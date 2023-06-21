import React, { useState } from 'react';
import { ModalCard } from 'components/ModalCard/ModalCard';
// import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import { ModalBoard } from 'components/ModalBoard/ModalBoard';
import { BackdropHome } from 'components/BackdropHome/BackdropHome';

export const BoardPage = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal(!isModal);
    console.log(121212);
  };

  const handleAddColum = value => {
    console.log('запит на додавання колонки');
    console.log(value);
    setIsModal(false);
  };

  return (
    <BackdropHome closeModal={handleToggleModal}>
      <button onClick={handleToggleModal}>click</button>
      {isModal && (
        <>
          {/* <ModalColumn
            inputTitle="Title"
            titleModalButton="Add"
            onClick={handleAddColum}
            handleToggleModal={handleToggleModal}
          /> */}

          <ModalCard
            inputTitle="Title"
            titleModalButton="Add"
            onClick={handleAddColum}
            handleToggleModal={handleToggleModal}
          />

          {/* <ModalBoard
            modalTitle="Add board"
            inputTitle="Title"
            titleModalButton="Add"
            onClick={handleAddColum}
            handleToggleModal={handleToggleModal}
          /> */}
        </>
      )}
    </BackdropHome>
  );
};
