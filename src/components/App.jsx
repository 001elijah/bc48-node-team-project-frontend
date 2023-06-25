import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import WelcomePage from 'pages/WelcomePage';
import AuthPage from '../pages/AuthPage';
import { HomePage } from 'pages/HomePage';

import { PrivateRoute, PublicRoute } from './Route/route';

import { currentUser } from 'redux/Auth/authOperations';
import { Loader } from './Loader/Loader';
import { DefaultDashBoard } from './DefaultBoard/DefaultBoard';
import { MainBoard } from './MainBoard/MainBoard';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <Loader />
      {/* <SharedLayout /> */}
      <Routes>
        <Route path="/" element={<PublicRoute component={<WelcomePage />} />} />
        <Route
          path="/auth/:id"
          element={<PublicRoute component={<AuthPage />} />}
        />
        <Route path="/home" element={<PrivateRoute component={<HomePage />} />}>
          <Route
            index
            element={<PrivateRoute component={<DefaultDashBoard />} />}
          />
          <Route
            path=":boardName"
            element={<PrivateRoute component={<MainBoard />} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
