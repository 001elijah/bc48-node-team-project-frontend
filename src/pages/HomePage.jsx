import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
import { themeChangeUser } from 'redux/Auth/authOperations';
import { selectorTheme } from 'redux/Auth/authSelectors';
import React, { useState } from 'react';
import { Modal } from '../components/Modal/Modal';

export const HomePage = () => {
  const theme = useSelector(selectorTheme) || '';
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = e => {
    dispatch(themeChangeUser(e.target.value));
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <select name="priority" value={theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>

      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
       <Modal title="New board" onClose={closeModal}>
         <p>Content of the modal.</p>
       </Modal>
       )}
    </div>
  );
};