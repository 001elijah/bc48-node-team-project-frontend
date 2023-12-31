import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectBackgroundThumbnails,
  selectBackgroundLoading,
} from '../../redux/Background/backgroundSelectors';
import { getListOfThumbnails } from '../../redux/Background/backgroundOperations';
import { selectorTheme } from '../../redux/Auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
import s from './BoxRadioBackgroundGroup.module.scss';

export const BoxRadioBackgroundGroup = ({
  valueChange,
  activeBackground = 'default',
}) => {
  const dispatch = useDispatch();

  const thumbnails = useSelector(selectBackgroundThumbnails);
  const loading = useSelector(selectBackgroundLoading);
  const theme = useSelector(selectorTheme);

  const [background, setBackground] = useState(activeBackground);

  const handleChange = e => {
    const selectedBackground = e.target.value;
    setBackground(selectedBackground);
    valueChange(selectedBackground);
  };

  useEffect(() => {
    dispatch(getListOfThumbnails());
  }, [dispatch]);

  return (
    <div className={s.backgroundGroupWrapper}>
      <h1 className={`${s.label} ${s[theme]}`}>Background</h1>
      <div className={s.radioWrapper}>
        {/* Default Background */}
        <div
          className={`${s.radioContainer} ${s[theme]} ${
            background === 'default' ? s.selected : ''
          }`}
        >
          <input
            className={`${s.radioInput} ${s[theme]}`}
            type="radio"
            onClick={handleChange}
            onChange={handleChange}
            value="default"
            name="background"
            id="radio-default"
            checked={background === 'default'}
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
                background === thumbnail.id ? s.selected : ''
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
                checked={background === thumbnail.id}
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
  activeBackground: PropTypes.string,
};
