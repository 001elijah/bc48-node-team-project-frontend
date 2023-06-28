import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import sprite from '../../assets/icons/sprite.svg';
import s from './BoxRadioIconGroup.module.scss';

export const BoxRadioIconGroup = ({ valueChange, activeIcon }) => {
  const [icon, setIcon] = useState(activeIcon);
  const theme = useSelector(selectorTheme);
  const arrayIcon = [
    'icon-project',
    'icon-star',
    'icon-loading',
    'icon-puzzle-piece',
    'icon-container',
    'icon-lightning',
    'icon-colors',
    'icon-hexagon',
  ];

  const handleChange = e => {
    setIcon(e.target.value);
    console.log(e.target.value);
    // onValue(icon);
  };

  useEffect(() => {
    // setIcon(activeIcon);
    valueChange(icon);
  }, [valueChange, icon]);

  return (
    <div className={s.container}>
      <h1 className={`${s.iconTitle} ${s[theme]}`}>Icons</h1>
      <div className={s.container__icons}>
        {arrayIcon.map(item => {
          return (
            <label htmlFor={item} key={item}>
              <input
                type="radio"
                name="rating"
                className={`${s.inputIcon} ${s[theme]}`}
                id={item}
                value={item}
                onChange={handleChange}
                checked={icon === item}
              />
              <svg
                // className={s.svg}
                className={`${s.svg} ${s[theme]}`}
                width="15"
                height="15"
              >
                <use href={sprite + `#${item}`}></use>
              </svg>
            </label>
          );
        })}
      </div>
    </div>
  );
};

BoxRadioIconGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
  activeIcon: PropTypes.string.isRequired,
};
