import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import PropTypes from 'prop-types';
import s from './BoxRadioBackgroundGroup.module.scss';

export const BoxRadioBackgroundGroup = ({ valueChange }) => {
  const theme = useSelector(selectorTheme);

  const [background, setBackground] = useState('one');
  // const handleChange = e => {
  //   setColor(e.target.value);
  //   valueColor(color);
  //   console.log(color);
  // };

  const handleCheked = e => {
    setBackground(e.target.value);
  };

  useEffect(() => {
    valueChange(background);
  }, [valueChange, background]);

  return (
    <div className={s.backgroundGroupWrapper}>
      <h1 className={`${s.label} ${s[theme]}`}>Background</h1>
      <div className={s.radioWrapper}>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput1}
            type="radio"
            onChange={handleCheked}
            value="one"
            name="background"
            id="one"
            checked={background === 'one'}
          />
          <label
            htmlFor="one"
            className={`${s.radioLabel1} ${s[theme]}`}
          ></label>
        </div>

        <div className={s.radioContainer}>
          <input
            className={s.radioInput2}
            type="radio"
            onChange={handleCheked}
            value="two"
            name="background"
            id="two"
            checked={background === 'two'}
          />
          <label htmlFor="two" className={s.radioLabel2}></label>
        </div>

        <div className={s.radioContainer}>
          <input
            className={s.radioInput3}
            type="radio"
            onChange={handleCheked}
            value="three"
            name="background"
            id="three"
            checked={background === 'three'}
          />
          <label htmlFor="three" className={s.radioLabel3}></label>
        </div>

        <div className={s.radioContainer}>
          <input
            className={s.radioInput4}
            type="radio"
            onChange={handleCheked}
            value="four"
            name="background"
            id="four"
            checked={background === 'four'}
          />
          <label htmlFor="four" className={s.radioLabel4}></label>
        </div>
        {/* 4 */}
        <div className={s.radioContainer}>
          <input
            className={s.radioInput5}
            type="radio"
            onChange={handleCheked}
            value="five"
            name="background"
            id="five"
            checked={background === 'five'}
          />
          <label htmlFor="five" className={s.radioLabel5}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput6}
            type="radio"
            onChange={handleCheked}
            value="six"
            name="background"
            id="six"
            checked={background === 'six'}
          />
          <label htmlFor="six" className={s.radioLabel6}></label>
        </div>

        <div className={s.radioContainer}>
          <input
            className={s.radioInput7}
            type="radio"
            onChange={handleCheked}
            value="seven"
            name="background"
            id="seven"
            checked={background === 'seven'}
          />
          <label htmlFor="seven" className={s.radioLabel7}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput8}
            type="radio"
            onChange={handleCheked}
            value="eight"
            name="background"
            id="eight"
            checked={background === 'eight'}
          />
          <label htmlFor="eight" className={s.radioLabel8}></label>
        </div>
        {/* 8 */}
        <div className={s.radioContainer}>
          <input
            className={s.radioInput9}
            type="radio"
            onChange={handleCheked}
            value="nine"
            name="background"
            id="nine"
            checked={background === 'nine'}
          />
          <label htmlFor="nine" className={s.radioLabel9}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput10}
            type="radio"
            onChange={handleCheked}
            value="ten"
            name="background"
            id="ten"
            checked={background === 'ten'}
          />
          <label htmlFor="ten" className={s.radioLabel10}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput11}
            type="radio"
            onChange={handleCheked}
            value="eleven"
            name="background"
            id="eleven"
            checked={background === 'eleven'}
          />
          <label htmlFor="eleven" className={s.radioLabel11}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput12}
            type="radio"
            onChange={handleCheked}
            value="twelve"
            name="background"
            id="twelve"
            checked={background === 'twelve'}
          />
          <label htmlFor="twelve" className={s.radioLabel12}></label>
        </div>
        {/* 12 */}
        <div className={s.radioContainer}>
          <input
            className={s.radioInput13}
            type="radio"
            onChange={handleCheked}
            value="thirteen"
            name="background"
            id="thirteen"
            checked={background === 'thirteen'}
          />
          <label htmlFor="thirteen" className={s.radioLabel13}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput14}
            type="radio"
            onChange={handleCheked}
            value="fourteen"
            name="background"
            id="fourteen"
            checked={background === 'fourteen'}
          />
          <label htmlFor="fourteen" className={s.radioLabel14}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput15}
            type="radio"
            onChange={handleCheked}
            value="fifteen"
            name="background"
            id="fifteen"
            checked={background === 'fifteen'}
          />
          <label htmlFor="fifteen" className={s.radioLabel15}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput16}
            type="radio"
            onChange={handleCheked}
            value="sixteen"
            name="background"
            id="sixteen"
            checked={background === 'sixteen'}
          />
          <label htmlFor="sixteen" className={s.radioLabel16}></label>
        </div>
        {/* 16 */}
      </div>
    </div>
  );
};

BoxRadioBackgroundGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
