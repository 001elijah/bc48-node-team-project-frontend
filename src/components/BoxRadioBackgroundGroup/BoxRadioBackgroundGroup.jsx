import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectBackgroundThumbnails,
  selectBackgroundLoading,
} from '../../redux/Background/backgroundSelectors';
import { getListOfThumbnails } from '../../redux/Background/backgroundOperations';
import { selectorTheme } from '../../redux/Auth/authSelectors';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';

import s from './BoxRadioBackgroundGroup.module.scss';

export const BoxRadioBackgroundGroup = ({ valueChange }) => {
  const thumbnails = useSelector(selectBackgroundThumbnails);
  const loading = useSelector(selectBackgroundLoading);
  const theme = useSelector(selectorTheme);

  const dispatch = useDispatch();
  const [selectedBackground, setSelectedBackground] = useState(null);

  const handleChange = e => {
    const selectedBackground = e.target.value;
    setSelectedBackground(selectedBackground);
    valueChange(selectedBackground);
  };

  useEffect(() => {
    dispatch(getListOfThumbnails());
  }, [dispatch]);

  useEffect(() => {
    setSelectedBackground('default');
  }, []);

  return (
    <div className={s.backgroundGroupWrapper}>
      <h1 className={`${s.label} ${s[theme]}`}>Background</h1>
      <div className={s.radioWrapper}>
        {/* Default Background */}
        <div
          className={`${s.radioContainer} ${s[theme]} ${
            selectedBackground === 'default' ? s.selected : ''
          }`}
        >
          <input
            className={`${s.radioInput} ${s[theme]}`}
            type="radio"
            onChange={handleChange}
            value="default"
            name="background"
            id="radio-default"
            checked={selectedBackground === 'default'}
          />
          <label
            htmlFor="radio-default"
            className={`${s.radioLabelDefault} ${s[theme]}`}
          ></label>
        </div>

        {/* Backgrounds from Backend */}
        {!loading &&
          thumbnails.map((thumbnail, index) => (
            <div
              className={`${s.radioContainer} ${s[theme]} ${
                selectedBackground === thumbnail.id ? s.selected : ''
              }`}
              key={thumbnail.id}
            >
              <input
                className={s.radioInput}
                type="radio"
                onChange={handleChange}
                value={thumbnail.id}
                name="background"
                id={`radio-${index}`}
                checked={selectedBackground === thumbnail.id}
              />
              <label
                htmlFor={`radio-${index}`}
                className={`${s.radioLabel} ${s[`radioLabel${index + 1}`]}`}
                style={{ backgroundImage: `url(${thumbnail.thumbnail})` }}
              ></label>
            </div>
          ))}
        {loading && (
          <div className={s.loaderWrapper}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

BoxRadioBackgroundGroup.propTypes = {
  valueChange: PropTypes.func.isRequired,
};
