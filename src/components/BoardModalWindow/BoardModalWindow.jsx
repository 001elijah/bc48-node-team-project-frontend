import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { BoxRadioIconGroup } from 'components/BoxRadioIconGroup/BoxRadioIconGroup';
import { BoxRadioBackgroundGroup } from 'components/BoxRadioBackgroundGroup/BoxRadioBackgroundGroup';
import sprite from '../../assets/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
import s from './BoardModalWindow.module.scss';

export const BoardModalWindow = ({
  inputTitle = '',
  activeIcon = 'icon-project',
  activeBackground = "default",
  modalTitle,
  titleModalButton,
  onSubmit,
  handleToggleModal,
}) => {
  const theme = useSelector(selectorTheme);
  const [title, setTitle] = useState(inputTitle);
  const [background, setBackground] = useState(activeBackground);
  const [icon, setIcon] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [errorTitleMaxLength, setErrorTitleMaxLength] = useState(false);
  const [errorCirillicaTitle, setErrorCirillicaTitle] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    if (errorCirillicaTitle) {
      return;
    }

    if (title === '') {
      setIsValid(true);
      setTimeout(() => setIsValid(false), 2500);
    } else {
      const newCard = {
        title: title,
        icon,
        background,
      };
      onSubmit(newCard);
      handleToggleModal();
    }
  };

  const handleChange = e => {
    const cyrillicRegex = /^[^\u0400-\u04FF]+$/;
    setTitle(e.target.value);

    if (e.target.value.length > 0 && !cyrillicRegex.test(e.target.value)) {
      setErrorCirillicaTitle(true);
      e.preventDefault();
    } else {
      setErrorCirillicaTitle(false);
    }

    if (e.target.value.length === 64) {
      setErrorTitleMaxLength(true);
    } else {
      setErrorTitleMaxLength(false);
    }
  };

  return (
    <Modal title={modalTitle} onClose={handleToggleModal}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={title}
          placeholder={'Title'}
          maxLength="64"
          onChange={handleChange}
        />
        {isValid && <p className={s.errorTitle}>required field</p>}
        {errorTitleMaxLength && (
          <p className={s.errorTitleMaxLength}>
            you have reached the symbols limit
          </p>
        )}
        {errorCirillicaTitle && !errorTitleMaxLength && (
          <p className={s.errorCirillicaTitle}>
            invalid characters (latin alphabet only)
          </p>
        )}
        <BoxRadioIconGroup valueChange={setIcon} activeIcon={activeIcon} />
        <BoxRadioBackgroundGroup valueChange={setBackground} activeBackground={activeBackground}/>
        <button className={`${s.buttonModal} ${s[theme]}`} type="submit">
          <span className={`${s.iconButtonModalWrapper} ${s[theme]}`}>
            <svg
              className={`${s.iconButtonModal} ${s[theme]}`}
              width="14"
              height="14"
            >
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </span>
          {titleModalButton}
        </button>
      </form>
    </Modal>
  );
};

BoardModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
  activeBackground: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
