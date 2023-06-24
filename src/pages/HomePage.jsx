import { Sidebar } from '../components/Sidebar/Sidebar';
import React from 'react';
import { Header } from 'components/Header/Header';
import { useMediaQuery } from 'react-responsive';
import { Container } from 'components/Container';
import { Outlet } from 'react-router-dom';

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
    </div>
  );
};
