import { useState } from 'react';
import s from './Modal.module.scss';
import PropTypes from 'prop-types';

export const LabelBlock = ({ newField }) => {
  const [field, setField] = useState(' ');
  const handleOnClick = e => {
    setField(e.currentTarget.value);
  };
  const handleOnClickAll = () => {
    setField('');
  };

  return (
    <>
      <div className={s.TextLine}>
        <span className={s.Title}>Label color</span>
        <span className={s.ShowAll} onClick={handleOnClickAll}>
          Show all
        </span>
      </div>
      <div>
        <input
          className={s.InputField}
          type="radio"
          id="without"
          name="filter"
          value="without"
          onClick={handleOnClick}
        />
        <label className={s.LabelField} htmlFor="without">
          Without priority
        </label>
      </div>
      <div>
        <input
          className={s.InputField}
          type="radio"
          id="low"
          name="filter"
          value="low"
          onClick={handleOnClick}
        />
        <label className={s.LabelField} htmlFor="low">
          Low
        </label>
      </div>
      <div>
        <input
          className={s.InputField}
          type="radio"
          id="medium"
          name="filter"
          value="medium"
          onClick={handleOnClick}
        />
        <label className={s.LabelField} htmlFor="medium">
          Medium
        </label>
      </div>
      <div>
        <input
          className={s.InputField}
          type="radio"
          id="high"
          name="filter"
          value="high"
          onClick={handleOnClick}
        />
        <label className={s.LabelField} htmlFor="high">
          High
        </label>
      </div>
    </>
  );
};
LabelBlock.propTypes = {
  newField: PropTypes.string,
};
