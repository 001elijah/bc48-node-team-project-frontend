import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { Login } from 'components/LoginForm/Login';
import { Register } from 'components/RegisterForm/Register';

import s from './AuthWindows.module.scss';

export const AuthWindows = () => {
  const { id } = useParams();

  return (
    <section className={s.wrap}>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/auth/register"
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth/login"
            className={({ isActive }) => clsx(s.link, isActive && s.active)}
          >
            Log In
          </NavLink>
        </li>
      </ul>
      <div className={s.wrapForm}>
        {id === 'login' ? <Login /> : <Register />}
      </div>
    </section>
  );
};
