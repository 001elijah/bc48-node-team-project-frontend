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
        <Board boardtitle="" />
      </div>
    </div>
  );
};