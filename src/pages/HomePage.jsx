import { Sidebar } from '../components/Sidebar/Sidebar';
import React from 'react';
import { Header } from 'components/Header/Header';
import { Board } from 'components/ScreensBoard/ScreensBoard';
import { useMediaQuery } from 'react-responsive';

export const HomePage = () => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div style={{ display: 'flex' }}>
      {isDesktopSize && <Sidebar />}

      <div>
        <Header />
        {/* <select name="priority" value={theme} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select> */}
        <Board boardtitle="" />
      </div>
    </div>
  );
};
