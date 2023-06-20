import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import Sidebar from '../components/Sidebar/Sidebar';

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};
