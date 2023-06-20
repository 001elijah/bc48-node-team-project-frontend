import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Container } from 'components/Container';
import { UserInfo } from 'components/UserInfo/UserInfo';
import s from './Header.module.scss';

import icons from '../../assets/icons/sprite.svg';

export const Header = () => {
  const theme = useSelector(state => state.auth?.user?.theme);

  return (
    <header className={clsx(s.header, s[theme])}>
      <Container>
        <div className={s.pageHeader}>
          <button onClick={() => {}} className={s.burgerMenu}>
            <svg className={clsx(s.burgerIcon, s[theme])}>
              <use href={`${icons}#icon-burger-menu`}></use>
            </svg>
          </button>

          <div className={s.dropDown}>
            <button className={clsx(s.dropBtn, s[theme])}>
              Theme
              <svg className={clsx(s.arrowIcon, s[theme])}>
                <use href={`${icons}#icon-arrow-down`}></use>
              </svg>
            </button>
            <div className={clsx(s.dropDownContent, s[theme])}>
              <div
                className={clsx(s.dropDownItem, s[theme])}
                onClick={() => {}}
              >
                Light
              </div>
              <div
                className={clsx(s.dropDownItem, s[theme])}
                onClick={() => {}}
              >
                Dark
              </div>
              <div
                className={clsx(s.dropDownItem, s[theme])}
                onClick={() => {}}
              >
                Colorful
              </div>
            </div>
          </div>
          <UserInfo />
        </div>
      </Container>
    </header>
  );
};
