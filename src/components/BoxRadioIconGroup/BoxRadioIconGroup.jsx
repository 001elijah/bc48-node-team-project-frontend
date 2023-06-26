import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import sprite from '../../assets/icons/sprite.svg';
import s from './BoxRadioIconGroup.module.scss';

export const BoxRadioIconGroup = ({ valueChange }) => {
  const [icon, setIcon] = useState('icon-project');
  const theme = useSelector(selectorTheme);
  const arr = [
    'icon-project',
    'icon-star',
    'icon-loading',
    'icon-puzzle-piece',
    'icon-container',
    'icon-lightning',
    'icon-colors',
    'icon-hexagon',
  ];

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
      <h1 className={`${s.iconTitle} ${s[theme]}`}>Icons</h1>
      <div className={s.container__icons}>
        {arr.map(item => {
          return (
            <label htmlFor={item} key={item}>
              <input
                type="radio"
                name="rating"
                className={`${s.inputIcon} ${s[theme]}`}
                id={item}
                value={item}
                onChange={handleChange}
                checked={icon === item}
              />
              <svg
                // className={s.svg}
                className={`${s.svg} ${s[theme]}`}
                width="15"
                height="15"
              >
                <use href={sprite + `#${item}`}></use>
              </svg>
            </label>
          );
        })}
      </div>
    </div>
  );
};

BoxRadioIconGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};

// <label htmlFor="1">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="1"
//     value="super-1"
//     onChange={handleChange}
//     checked={icon === '1'}
//   />
//   <svg
//     // className={s.svg}
//     className={`${s.svg} ${s[theme]}`}
//     width="15"
//     height="15"
//   >
//     <use href={sprite + '#icon-project'}></use>
//   </svg>
// </label>;

// {
//   /* 2 */
// }
// <label htmlFor="2">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="2"
//     value="2"
//     onChange={handleChange}
//     checked={icon === '2'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-star'}></use>
//   </svg>
// </label>;

// {
//   /* 3 */
// }
// <label htmlFor="3">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="3"
//     value="3"
//     onChange={handleChange}
//     checked={icon === '3'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-loading'}></use>
//   </svg>
// </label>;

// {
//   /* 4 */
// }
// <label htmlFor="4">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="4"
//     value="4"
//     onChange={handleChange}
//     checked={icon === '4'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-puzzle-piece'}></use>
//   </svg>
// </label>;

// {
//   /* 5 */
// }
// <label htmlFor="5">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="5"
//     value="5"
//     onChange={handleChange}
//     checked={icon === '5'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-container'}></use>
//   </svg>
// </label>;

// {
//   /* 6 */
// }
// <label htmlFor="6">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="6"
//     value="6"
//     onChange={handleChange}
//     checked={icon === '6'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-lightning'}></use>
//   </svg>
// </label>;

// {
//   /* 7 */
// }
// <label htmlFor="7">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="7"
//     value="7"
//     onChange={handleChange}
//     checked={icon === '7'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-colors'}></use>
//   </svg>
// </label>;

// {
//   /* 8 */
// }
// <label htmlFor="8">
//   <input
//     type="radio"
//     name="rating"
//     className={`${s.inputIcon} ${s[theme]}`}
//     id="8"
//     value="8"
//     onChange={handleChange}
//     checked={icon === '8'}
//   />
//   <svg className={`${s.svg} ${s[theme]}`} width="15" height="15">
//     <use href={sprite + '#icon-hexagon'}></use>
//   </svg>
// </label>;
