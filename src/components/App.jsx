import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BoardPage } from 'pages/BoardPage';
import { WelcomePage } from 'pages/WelcomePage/WelcomePage';
import AuthPage from '../pages/AuthPage/AuthPage';

export const App = () => {
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
    </>
  );
};
