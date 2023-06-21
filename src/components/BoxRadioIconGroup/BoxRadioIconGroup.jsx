import { useEffect, useState } from 'react';
import s from './BoxRadioIconGroup.module.scss';
import PropTypes from 'prop-types';
import sprite from '../../assets/icons/sprite.svg';

export const BoxRadioIconGroup = ({ onValue }) => {
  const [icon, setIcon] = useState('super-happy');

  const handleChange = e => {
    setIcon(e.target.value);
    // onValue(icon);
  };

  useEffect(() => {
    onValue(icon);
  }, [onValue, icon]);

  return (
    <div className={s.container}>
      <h1 className={s.title_icon}>Icons</h1>
      <form className={s.container__icons}>
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-project'}></use>
          </svg>
        </label>

        {/* 2 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-star'}></use>
          </svg>
        </label>

        {/* 3 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-loading'}></use>
          </svg>
        </label>

        {/* 4 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-puzzle-piece'}></use>
          </svg>
        </label>

        {/* 5 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-container'}></use>
          </svg>
        </label>

        {/* 6 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-lightning'}></use>
          </svg>
        </label>

        {/* 7 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-colors'}></use>
          </svg>
        </label>

        {/* 8 */}
        <label htmlFor="super-happy">
          <input
            type="radio"
            name="rating"
            className={s.inputIcon}
            id="super-happy"
            value="super-happy"
            onChange={handleChange}
            checked={icon === 'super-happy'}
          />
          <svg className={s.svg_dark} width="15" height="15">
            <use href={sprite + '#icon-hexagon'}></use>
          </svg>
        </label>
      </form>
    </div>
  );
};

BoxRadioIconGroup.propTypes = {
  onValue: PropTypes.func.isRequired,
};
