import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './BoxRadioColorGroup.module.scss';

export const BoxRadioColorGroup = ({ valueChange }) => {
  const [color, setColor] = useState('dark');
  // const handleChange = e => {
  //   setColor(e.target.value);
  //   valueColor(color);
  //   console.log(color);
  // };

  const handleCheked = e => {
    setColor(e.target.value);
    // valueChange(color);
  };

  useEffect(() => {
    valueChange(color);
  }, [valueChange, color]);

  return (
    <div className={s.radio}>
      <div className={s.radio_container}>
        <input
          className={s.radio_input1}
          type="radio"
          onChange={handleCheked}
          value="dark"
          name="color"
          id="dark"
          checked={color === 'dark'}
        />
        <label htmlFor="dark" className={s.radio_label1}></label>
      </div>
      <div className={s.radio_container}>
        <input
          className={s.radio_input2}
          type="radio"
          onChange={handleCheked}
          value="white"
          name="color"
          id="white"
          checked={color === 'white'}
        />
        <label htmlFor="white" className={s.radio_label2}></label>
      </div>
      <div className={s.radio_container}>
        <input
          className={s.radio_input3}
          type="radio"
          onChange={handleCheked}
          value="red"
          name="color"
          id="red"
          checked={color === 'red'}
        />
        <label htmlFor="red" className={s.radio_label3}></label>
      </div>
      <div className={s.radio_container}>
        <input
          className={s.radio_input4}
          type="radio"
          onChange={handleCheked}
          value="blue"
          name="color"
          id="blue"
          checked={color === 'blue'}
        />
        <label htmlFor="blue" className={s.radio_label4}></label>
      </div>
    </div>
  );
};

BoxRadioColorGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};

// MuiSvgIcon-root

{
  /* <input type="radio" name="topping" value="Regular" id="regular" />
<label htmlFor="regular">Regular</label>

<input type="radio" name="topping" value="Medium" id="medium" />
<label htmlFor="medium">Medium</label>

<input type="radio" name="topping" value="Large" id="large" />
<label htmlFor="large">Large</label> */
}
