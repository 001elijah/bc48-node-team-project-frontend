import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BoardPage } from 'pages/BoardPage';
import { ModalCard } from './ModalCard/ModalCard';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';
import { useState } from 'react';

export const App = () => {
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
    <>
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="auth/:id" element={<AuthPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/board" element={<BoardPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

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
        </>
      )}
    </>
  );
};
