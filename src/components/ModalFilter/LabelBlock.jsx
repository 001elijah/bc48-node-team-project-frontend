import { useEffect, useState } from 'react';
import s from './Modal.module.scss';
import PropTypes from 'prop-types';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

const InputBlock = ({ title, label, func = 'handleOnClick', theme }) => {
  return (
    <div className={clsx(s.InputBlock, s[theme])}>
      <input
        className={clsx(s.InputField, s[theme])}
        type="radio"
        id={title}
        name="filter"
        value={title}
        onClick={func}
      />
      <label className={clsx(s.LabelField, s[theme])} htmlFor={title}>
        {label}
      </label>
    </div>
  );
};
InputBlock.propTypes = {
  newField: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  func: PropTypes.func,
  theme: PropTypes.string,
};

export const LabelBlock = ({ newField }) => {
  const theme = useSelector(selectorTheme);
  const [field, setField] = useState('');
  const handleOnClick = e => {
    setField(e.currentTarget.value);
  };
  const handleOnClickAll = () => {
    setField('none');
  };
 useEffect(()=>{
  newField(field)
 }, [field, ])

  return (
    <>
      <div className={clsx(s.TextLine, s[theme])}>
        <span className={clsx(s.Title, s[theme])}>Label color</span>
        <span className={clsx(s.ShowAll, s[theme])} onClick={handleOnClickAll}>
          Show all
        </span>
      </div>
      <InputBlock
        title="without"
        label="Without"
        func={handleOnClick}
        theme={theme}
      />
      <InputBlock title="low" label="Low" func={handleOnClick} theme={theme} />
      <InputBlock
        title="medium"
        label="Medium"
        func={handleOnClick}
        theme={theme}
      />
      <InputBlock
        title="high"
        label="High"
        func={handleOnClick}
        theme={theme}
      />
    </>
  );
};
LabelBlock.propTypes = {
  newField: PropTypes.func.isRequired,
};
