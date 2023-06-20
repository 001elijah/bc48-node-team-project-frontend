import React, { useState } from 'react';
// import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import { ModalCard } from 'components/ModalCard/ModalCard';
import { BackdropHome } from 'components/BackdropHome/BackdropHome';
// import { ModalBoard } from 'components/ModalBoard/ModalBoard';
// import { SelectData } from 'components/SelectData/SelectData';

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
    <BackdropHome>
      <button onClick={handleToggleModal}>click</button>
      {isModal && (
        <>
          <ModalCard
            modalTitle="Add column"
            inputTitle="Title"
            titleModalButton="Add"
            onClick={handleAddColum}
            handleToggleModal={handleToggleModal}
          />
          {/* <ModalBoard
            modalTitle="Add column"
            inputTitle="Title"
            titleModalButton="Add"
            onClick={handleAddColum}
            handleToggleModal={handleToggleModal}
          /> */}
        </>
      )}
      {/* <SelectData /> */}
    </BackdropHome>
  );
};

{
  /* <ModalBoard modalTitle="Add column" inputTitle="Title" titleModalButton="Add">
  <h1>asasasas</h1>
  <h1>asasasas</h1>
</ModalBoard>; */
}
