import React from 'react';
import s from './SideBarBackDrop.module.scss';
import PropTypes from 'prop-types';

export const SideBarBackDrop = ({ children, toggleSidebar }) => {
  const closeSidebar = e => {
    if (e.currentTarget === e.target) {
      toggleSidebar();
    }
  };
  return (
    <div data-aos="fade-right" onClick={closeSidebar} className={s.backdrop}>
      {children}
    </div>
  );
};

SideBarBackDrop.propTypes = {
  children: PropTypes.node.isRequired,
  toggleSidebar: PropTypes.func,
};
