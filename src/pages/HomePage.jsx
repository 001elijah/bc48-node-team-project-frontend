import { Sidebar } from '../components/Sidebar/Sidebar';
import React from 'react';
import { Header } from 'components/Header/Header';
import { useMediaQuery } from 'react-responsive';

export const HomePage = () => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div style={{ display: 'flex' }}>
      {isDesktopSize && <Sidebar />}

      <div>
        <Header />
        {/* <Board boardtitle="" /> */}

        {/* Приклади модалок створення/редагування дошок/колонок/карток */}
        {/* <CardModalWindow inputTitle='Title' titleModalButton="Add" modalTitle="Add card"/> */}
        {/* <ReusableColumnModalWindow inputTitle='Title' titleModalButton="Add" modalTitle="Add column"/> */}
        {/* <BoardModalWindow inputTitle='Title' titleModalButton="Create" modalTitle="New board"/> */}
      </div>
    </div>
  );
};
