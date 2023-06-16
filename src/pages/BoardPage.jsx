import React from 'react';
import { ModalColumn } from 'components/ModalColumn/ModalColumn';

export const BoardPage = () => {
  const handleOpenModal = () => {
    console.log(121212);
  };
  return (
    <div>
      <button onClick={() => handleOpenModal} />
      <ModalColumn
        modalTitle="Add column"
        inputTitle="Title"
        titleModalButton="Add"
      >
        {/* <h1>asasasas</h1>
        <h1>asasasas</h1> */}
      </ModalColumn>
    </div>
  );
};

{
  /* <ModalBoard modalTitle="Add column" inputTitle="Title" titleModalButton="Add">
  <h1>asasasas</h1>
  <h1>asasasas</h1>
</ModalBoard>; */
}
