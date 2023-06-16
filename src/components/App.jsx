import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { BoardPage } from 'pages/BoardPage';
import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  return (
    <>
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="/board" element={<BoardPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
