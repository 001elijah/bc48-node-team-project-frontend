import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import s from './BoxRadioIconGroup.module.scss';

export const BoxRadioIconGroup = ({ valueChange }) => {
  const [icon, setIcon] = useState('1');

  const handleChange = e => {
    setIcon(e.target.value);
    console.log(e.target.value);
    // onValue(icon);
  };

  useEffect(() => {
    valueChange(icon);
  }, [valueChange, icon]);

  return (
    <div className={s.container}>
      <h1 className={s.iconTitle}>Icons</h1>
      <div className={s.container__icons}>
        <label htmlFor="1">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="1"
            value="icon-project"
            onChange={handleChange}
            checked={icon === '1'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-project'}></use>
          </svg>
        </label>

        {/* 2 */}
        <label htmlFor="2">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="2"
            value="icon-star"
            onChange={handleChange}
            checked={icon === '2'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-star'}></use>
          </svg>
        </label>

        {/* 3 */}
        <label htmlFor="3">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="3"
            value="icon-loading"
            onChange={handleChange}
            checked={icon === '3'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-loading'}></use>
          </svg>
        </label>

        {/* 4 */}
        <label htmlFor="4">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="4"
            value="icon-puzzle-piece"
            onChange={handleChange}
            checked={icon === '4'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-puzzle-piece'}></use>
          </svg>
        </label>

        {/* 5 */}
        <label htmlFor="5">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="5"
            value="icon-container"
            onChange={handleChange}
            checked={icon === '5'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-container'}></use>
          </svg>
        </label>

        {/* 6 */}
        <label htmlFor="6">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="6"
            value="icon-lightning"
            onChange={handleChange}
            checked={icon === '6'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-lightning'}></use>
          </svg>
        </label>

        {/* 7 */}
        <label htmlFor="7">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="7"
            value="icon-colors"
            onChange={handleChange}
            checked={icon === '7'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-colors'}></use>
          </svg>
        </label>

        {/* 8 */}
        <label htmlFor="8">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="8"
            value="icon-hexagon"
            onChange={handleChange}
            checked={icon === '8'}
          />
          <svg className={s.svg} width="15" height="15">
            <use href={sprite + '#icon-hexagon'}></use>
          </svg>
        </label>
      </div>
    </div>
  );
};

BoxRadioIconGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
