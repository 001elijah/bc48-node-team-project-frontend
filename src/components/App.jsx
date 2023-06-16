import { ModalBoard } from './ModalBoard/ModalBoard';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ModalBoard
        modalTitle="Add column"
        inputTitle="Title"
        titleModalButton="Add"
      >
        <h1>asasasas</h1>
        <h1>asasasas</h1>
      </ModalBoard>
    </div>
  );
};
