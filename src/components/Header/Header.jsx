import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
//  import { Container } from 'components/Container';
import { UserInfo } from 'components/UserInfo/UserInfo';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { themeChangeUser } from 'redux/Auth/authOperations';
import s from './Header.module.scss';
import icons from '../../assets/icons/sprite.svg';
import { SideBarBackDrop } from '../SideBarBackDrop/SideBarBackDrop';
import { Sidebar } from '../Sidebar/Sidebar';

// import sidebarStyles from '../Sidebar/Sidebar.module.scss';

export const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  const theme = useSelector(selectorTheme);
  const dispatch = useDispatch();

  const changeTheme = themeValue => {
    dispatch(themeChangeUser(themeValue));
  };

  return (
    <>
      <header className={clsx(s.header, s[theme])}>
        {/* <Container> */}
        <div className={s.pageHeader}>
          <button onClick={toggleSidebar} className={s.burgerMenu}>
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
                onClick={() => changeTheme('light')}
              >
                Light
              </div>
              <div
                className={clsx(s.dropDownItem, s[theme])}
                onClick={() => changeTheme('dark')}
              >
                Dark
              </div>
              <div
                className={clsx(s.dropDownItem, s[theme])}
                onClick={() => changeTheme('colorful')}
              >
                Violet
              </div>
            </div>
          </div>
          <UserInfo />
        </div>
        {/* </Container> */}
      </header>
      {showSidebar && (
        <SideBarBackDrop toggleSidebar={toggleSidebar}>
          <Sidebar />
        </SideBarBackDrop>
      )}
    </>
  );
};
