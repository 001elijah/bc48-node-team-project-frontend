import { Sidebar } from '../components/Sidebar/Sidebar';
import React from 'react';
import { Header } from 'components/Header/Header';
import { useMediaQuery } from 'react-responsive';

import { Container } from 'components/Container';
import { DefaultDashBoard } from 'components/ScreensBoard/DefaultBoard/DefaultBoard';
import { Outlet } from 'react-router-dom';


export const HomePage = () => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div >
    <Container>
      {/* <Header /> */}
      {/* <select name="priority" value={theme} onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select> */}

      {/* <Board
        boardtitle =""
      /> */}

      {/* <button onClick={() => dispatch(logoutUser())}>Log logOut</button>

      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <Modal title="New board" onClose={closeModal}>
          <p>Content of the modal.</p>
        </Modal>
      )}
      <Outlet/> */}

    <div style={{ display: 'flex' }}>
      {isDesktopSize && <Sidebar />}

      <div style={{ width: '100%' }}>
        <Header />
        {/* <select name="priority" value={theme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select> */}
        <Outlet/>
      </div>

    </div>
    </Container>
    </div>
  );
};
