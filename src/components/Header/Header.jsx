import { Container } from 'components/Container';
import { UserInfo } from 'components/UserInfo/UserInfo';
import s from './Header.module.scss';

import icons from '../../assets/icons/sprite.svg';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.pageHeader}>
          <button onClick={() => {}} className={s.burgerMenu}>
            <svg className={s.burgerIcon}>
              <use href={`${icons}#icon-burger-menu`} stroke="white"></use>
            </svg>
          </button>

          <div className={s.dropDown}>
            <button className={s.dropBtn}>
              Theme
              <svg className={s.arrowIcon}>
                <use href={`${icons}#icon-arrow-down`} stroke="white"></use>
              </svg>
            </button>
            <div className={s.dropDownContent}>
              <div onClick={() => {}}>Light</div>
              <div onClick={() => {}}>Dark</div>
              <div onClick={() => {}}>Violet</div>
            </div>
          </div>
          <UserInfo />
        </div>
      </Container>
    </header>
  );
};
