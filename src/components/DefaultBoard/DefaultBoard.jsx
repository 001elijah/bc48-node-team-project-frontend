import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import React from 'react';
import s from './Default.module.scss';
import { HeaderDashBoard } from 'components/HeaderDashBoard/HeaderDashBoard';

export const DefaultDashBoard = () => {
  const theme = useSelector(selectorTheme);
  return (
    <>
      <div className={clsx(s.BackGround, s[theme])}>
      <HeaderDashBoard/>
      <div className={s.Wrapper}>
        <p className={clsx(s.DefaultTitle, s[theme])}>
          Before starting your project, it is essential
          <span className={clsx(s.DefaultLink, s[theme])}> to create a board </span>
          to visualize and track all the necessary tasks and milestones. This
          board serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </p>
        </div>
      </div>
    </>
  );
};
