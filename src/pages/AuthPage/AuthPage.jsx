import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { Login } from 'components/AuthForm/Login/Login';
import { Register } from 'components/AuthForm/Register/Register';
import { BackdropHome } from 'components/BackdropHome/BackdropHome';

import s from './AuthPage.module.scss';

const AuthPage = () => {
  const { id } = useParams();
  return (
    <BackdropHome>
      <div className="container">
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
      </div>
    </BackdropHome>
  );
};

export default AuthPage;
