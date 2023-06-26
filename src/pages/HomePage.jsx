import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container';
import { TaskCard } from 'components/TaskCard/TaskCard';
export const HomePage = () => {
  const isDesktopSize = useMediaQuery({ query: '(min-width: 1280px)' });

  return (
    <div>
      <Container>
        <div style={{ display: 'flex' }}>
          {isDesktopSize && <Sidebar />}
          <div style={{ width: '100%' }}>
            <Header />
            <Outlet />
          </div>
        </div>
      </Container>
      <TaskCard/>
    </div>
  );
};
