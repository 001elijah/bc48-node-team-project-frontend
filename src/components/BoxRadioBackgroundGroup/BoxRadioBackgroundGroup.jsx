import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './BoxRadioBackgroundGroup.module.scss';
import clsx from 'clsx';

export const BoxRadioBackgroundGroup = ({ valueChange }) => {
  const [bachground, setBachground] = useState('one');
  // const handleChange = e => {
  //   setColor(e.target.value);
  //   valueColor(color);
  //   console.log(color);
  // };

  const thema = 'dark';
  const handleCheked = e => {
    setBachground(e.target.value);
  };

  useEffect(() => {
    valueChange(bachground);
  }, [valueChange, bachground]);

  // Strings (variadic)
  // clsx('foo', true && 'bar', 'baz');
  //=> 'foo bar baz'

  // console.log(clsx(s.title__backgroung__, thema === 'dark' && 'dark'));
  // console.log(clsx('foo', true && 'bar', 'baz'));

  return (
    <div className={s.box__backgroung}>
      <h1 className={clsx(s.title__backgroung__, thema === 'dark' && 'dark')}>
        Backgroung
      </h1>
      <div className={s.radio}>
        <div className={s.radio_container}>
          <input
            className={s.radio_input1}
            type="radio"
            onChange={handleCheked}
            value="one"
            name="bachground"
            id="one"
            checked={bachground === 'one'}
          />
          <label htmlFor="one" className={s.radio_label1}></label>
        </div>

        <div className={s.radio_container}>
          <input
            className={s.radio_input2}
            type="radio"
            onChange={handleCheked}
            value="second"
            name="bachground"
            id="second"
            checked={bachground === 'second'}
          />
          <label htmlFor="second" className={s.radio_label2}></label>
        </div>

        <div className={s.radio_container}>
          <input
            className={s.radio_input3}
            type="radio"
            onChange={handleCheked}
            value="tree"
            name="bachground"
            id="tree"
            checked={bachground === 'tree'}
          />
          <label htmlFor="tree" className={s.radio_label3}></label>
        </div>

        <div className={s.radio_container}>
          <input
            className={s.radio_input4}
            type="radio"
            onChange={handleCheked}
            value="4"
            name="bachground"
            id="4"
            checked={bachground === '4'}
          />
          <label htmlFor="4" className={s.radio_label4}></label>
        </div>
        {/* 4 */}
        <div className={s.radio_container}>
          <input
            className={s.radio_input5}
            type="radio"
            onChange={handleCheked}
            value="5"
            name="bachground"
            id="5"
            checked={bachground === '5'}
          />
          <label htmlFor="5" className={s.radio_label5}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input6}
            type="radio"
            onChange={handleCheked}
            value="6"
            name="bachground"
            id="6"
            checked={bachground === '6'}
          />
          <label htmlFor="6" className={s.radio_label6}></label>
        </div>

        <div className={s.radio_container}>
          <input
            className={s.radio_input7}
            type="radio"
            onChange={handleCheked}
            value="7"
            name="bachground"
            id="7"
            checked={bachground === '7'}
          />
          <label htmlFor="7" className={s.radio_label7}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input8}
            type="radio"
            onChange={handleCheked}
            value="8"
            name="bachground"
            id="8"
            checked={bachground === '8'}
          />
          <label htmlFor="8" className={s.radio_label8}></label>
        </div>
        {/* 8 */}
        <div className={s.radio_container}>
          <input
            className={s.radio_input9}
            type="radio"
            onChange={handleCheked}
            value="девять"
            name="bachground"
            id="девять"
            checked={bachground === 'девять'}
          />
          <label htmlFor="девять" className={s.radio_label9}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input10}
            type="radio"
            onChange={handleCheked}
            value="десять"
            name="bachground"
            id="десять"
            checked={bachground === 'десять'}
          />
          <label htmlFor="десять" className={s.radio_label10}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input11}
            type="radio"
            onChange={handleCheked}
            value="11"
            name="bachground"
            id="11"
            checked={bachground === '11'}
          />
          <label htmlFor="11" className={s.radio_label11}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input12}
            type="radio"
            onChange={handleCheked}
            value="12"
            name="bachground"
            id="12"
            checked={bachground === '12'}
          />
          <label htmlFor="12" className={s.radio_label12}></label>
        </div>
        {/* 12 */}
        <div className={s.radio_container}>
          <input
            className={s.radio_input13}
            type="radio"
            onChange={handleCheked}
            value="13"
            name="bachground"
            id="13"
            checked={bachground === '13'}
          />
          <label htmlFor="13" className={s.radio_label13}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input14}
            type="radio"
            onChange={handleCheked}
            value="14"
            name="bachground"
            id="14"
            checked={bachground === '14'}
          />
          <label htmlFor="14" className={s.radio_label14}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input15}
            type="radio"
            onChange={handleCheked}
            value="15"
            name="bachground"
            id="15"
            checked={bachground === '15'}
          />
          <label htmlFor="15" className={s.radio_label15}></label>
        </div>
        <div className={s.radio_container}>
          <input
            className={s.radio_input16}
            type="radio"
            onChange={handleCheked}
            value="16"
            name="bachground"
            id="16"
            checked={bachground === '16'}
          />
          <label htmlFor="16" className={s.radio_label16}></label>
        </div>
        {/* 16 */}
      </div>
    </div>
  );
};

BoxRadioBackgroundGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
