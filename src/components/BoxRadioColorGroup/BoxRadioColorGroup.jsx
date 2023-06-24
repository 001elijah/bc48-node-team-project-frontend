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
            value="dark"
            name="color"
            id="dark"
            checked={color === 'dark'}
          />
          <label
            htmlFor="dark"
            className={`${s.radioLabelHigh} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="white"
            name="color"
            id="white"
            checked={color === 'white'}
          />
          <label
            htmlFor="white"
            className={`${s.radioLabelMedium} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="red"
            name="color"
            id="red"
            checked={color === 'red'}
          />
          <label
            htmlFor="red"
            className={`${s.radioLabelLow} ${s[theme]}`}
          ></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput}
            type="radio"
            onChange={handleCheked}
            value="blue"
            name="color"
            id="blue"
            checked={color === 'blue'}
          />
          <label
            htmlFor="blue"
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
