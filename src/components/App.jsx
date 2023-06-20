import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import WelcomePage from 'pages/WelcomePage';
import AuthPage from '../pages/AuthPage';
import { HomePage } from 'pages/HomePage';
import { BoardPage } from 'pages/BoardPage';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { PrivateRoute, PublicRoute } from './AuthForm/route';

import { currentUser } from 'redux/Auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <SharedLayout />
      <Routes>
        <Route path="/" element={<PublicRoute component={<WelcomePage />} />} />
        <Route
          path="/auth/:id"
          element={<PublicRoute component={<AuthPage />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<HomePage />} />}
        />
        <Route
          path="/board"
          element={<PrivateRoute component={<BoardPage />} />}
        />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
