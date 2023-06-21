import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
// import { themeChangeUser } from 'redux/Auth/authOperations';
// import { selectorTheme } from 'redux/Auth/authSelectors';
import React, { useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { ModalEditProfile } from 'components/ModalEditProfile/ModalEditProfile';
import { Header } from 'components/Header/Header';


export const HomePage = () => {
  // const theme = useSelector(selectorTheme) || '';
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleChange = e => {
  //   dispatch(themeChangeUser(e.target.value));
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      {/* <select name="priority" value={theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select> */}
      <button onClick={() => dispatch(logoutUser())}>Log logOut</button>

      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <Modal title="Edit profile" onClose={closeModal}>
          <ModalEditProfile/>
        </Modal>
      )}
    </div>
  );
};