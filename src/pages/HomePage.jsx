import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/Auth/authOperations';
// import { themeChangeUser } from 'redux/Auth/authOperations';
// import { selectorTheme } from 'redux/Auth/authSelectors';
import React, { useEffect, useState } from 'react';
import { Modal } from '../components/Modal/Modal';
import { Header } from 'components/Header/Header';
import { Board } from 'components/ScreensBoard/ScreensBoard';
import { CalendarDark } from 'components/CalendarDark/CalendarDark';
// import { addColumn } from 'services/backendAPI';
import { addColumn } from '../redux/Board/boardOperation';
import { CalendarLight } from 'components/CalendarLight/CalendarLight';

export const HomePage = () => {
  // const theme = useSelector(selectorTheme) || '';
  const theme = 'dark';
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState(false);

  // const handleChange = e => {
  //   dispatch(themeChangeUser(e.target.value));
  // };
  useEffect(() => {
    addColumn();
  }, []);
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
      {theme === 'dark' ? (
        <CalendarDark onDate={setDate} />
      ) : (
        <CalendarLight onDate={setDate} />
      )}

      <Board boardtitle="" />
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
