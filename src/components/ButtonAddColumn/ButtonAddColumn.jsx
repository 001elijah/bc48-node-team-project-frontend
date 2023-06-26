import s from './ButtonAddColumn.module.scss';
import svg from '../../assets/icons/sprite.svg';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const AddButton = ({ title, typeOfButton, onClick}) => {
  const theme = useSelector(selectorTheme);

  return (
    <>

      <div className={clsx(s.Button, s[typeOfButton], s[theme])} onClick={onClick}>
        <div className={clsx(s.BoxPlus, s[typeOfButton], s[theme])}>
          <svg width="16" height="16" className={s.Svg}>
            <use href={`${svg}#icon-${'plus'}`} />
          </svg>
        </div>
        <p className={clsx(s.TitleCard, s[typeOfButton], s[theme])}>{title}</p>
      </div>
    </>
  );
};

AddButton.propTypes = {
  title: PropTypes.string,
  typeOfButton: PropTypes.string,
  onClick:PropTypes.func
};
