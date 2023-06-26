import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import s from './BoxRadioColorGroup.module.scss';

export const BoxRadioColorGroup = ({ valueChange }) => {
  const [color, setColor] = useState('dark');
  const theme = useSelector(selectorTheme);

  const handleCheked = e => {
    setColor(e.target.value);
    // valueChange(color);
  };

  useEffect(() => {
    valueChange(color);
  }, [valueChange, color]);

  return (
    <>
      <h2 className={`${s.titleColor} ${s[theme]}`}>Label color</h2>
      <div className={s.radio}>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="low"
            name="color"
            id="low"
            checked={color === 'low'}
          />
          <label
            htmlFor="low"
            className={`${s.radioLabelHigh} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="medium"
            name="color"
            id="medium"
            checked={color === 'medium'}
          />
          <label
            htmlFor="medium"
            className={`${s.radioLabelMedium} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="high"
            name="color"
            id="high"
            checked={color === 'high'}
          />
          <label
            htmlFor="high"
            className={`${s.radioLabelLow} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="without"
            name="color"
            id="without"
            checked={color === 'without'}
          />
          <label
            htmlFor="without"
            className={`${s.radioLabelWithout} ${s[theme]}`}
          ></label>
        </div>
      </div>
    </>
  );
};

BoxRadioColorGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
