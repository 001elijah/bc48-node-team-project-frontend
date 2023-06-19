import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';

export const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>
    </div>
  );
};
