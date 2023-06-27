import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import PropTypes from 'prop-types';
import s from './BoxRadioBackgroundGroup.module.scss';

import {currentBoard} from '../../redux/Boards/boardsSelectors'

export const BoxRadioBackgroundGroup = ({ valueChange }) => {
  const board = useSelector(currentBoard)
  const currentBackgroud = board.background
  const theme = useSelector(selectorTheme);

  const [background, setBackground] = useState(currentBackgroud);
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
            value=''
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
            value="11.jpg"
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
            value="12.jpg"
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
            value="13.jpg"
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
            value="14.jpg"
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
            value="15.jpg"
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
            value="16.jpg"
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
            value="17.jpg"
            name="background"
            id="eight"
            checked={background === 'eight'}
          />
          <label htmlFor="eight" className={s.radioLabel8}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput9}
            type="radio"
            onChange={handleCheked}
            value="18.jpg"
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
            value="19.jpg"
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
            value="20.jpg"
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
            value="21.jpg"
            name="background"
            id="twelve"
            checked={background === 'twelve'}
          />
          <label htmlFor="twelve" className={s.radioLabel12}></label>
        </div>
        <div className={s.radioContainer}>
          <input
            className={s.radioInput13}
            type="radio"
            onChange={handleCheked}
            value="22.jpg"
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
            value="23.jpg"
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
            value="24.jpg"
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
            value="25.jpg"
            name="background"
            id="sixteen"
            checked={background === 'sixteen'}
          />
          <label htmlFor="sixteen" className={s.radioLabel16}></label>
        </div>
      </div>
    </div>
  );
};

BoxRadioBackgroundGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
