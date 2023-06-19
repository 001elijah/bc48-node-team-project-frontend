import { NavLink } from 'react-router-dom';

import icons from '../../assets/icons/sprite.svg';

import s from './WelcomeWindows.module.scss';

export const WelcomeWindows = () => {
  return (
    <section className={s.section}>
      <div className={s.image}></div>
      <div className={s.wrap}>
        <svg className={s.icon}>
          <use href={`${icons}#icon-welcome`}></use>
        </svg>
        <h1 className={s.title}>Task Pro</h1>
      </div>
      <p className={s.text}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don&apos;t wait, start achieving your goals now!
      </p>
      <NavLink to="/auth/register" className={s.link}>
        Registration
      </NavLink>
      <NavLink to="/auth/login" className={s.secondLink}>
        Log In
      </NavLink>
    </section>
  );
};
