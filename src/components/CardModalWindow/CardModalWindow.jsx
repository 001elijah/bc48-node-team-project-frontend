import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
import { CalendarDark } from 'components/CalendarDark/CalendarDark';
import { CalendarLight } from 'components/CalendarLight/CalendarLight';
import { CalendarColorful } from 'components/CalendarColorful/CalendarColorful';
import s from './CardModalWindow.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const CardModalWindow = ({
  modalTitle,
  inputTitle = '',
  description = '',
  titleModalButton,
  onSubmit,
  handleToggleModal,
  date,
  color,
}) => {
  const theme = useSelector(selectorTheme);

  const [isValid, setIsValid] = useState(false);
  const [errorTitleMaxLength, setErrorTitleMaxLength] = useState(false);
  const [errorCirillicaTitle, setErrorCirillicaTitle] = useState(false);
  const [errorMaxLengthDescription, setErrorMaxLengthDescription] =
    useState(false);
  const [errorCirillicaDescription, setErrorCirillicaDescription] =
    useState(false);
  const [value, setValue] = useState(inputTitle);
  const [coment, setComent] = useState(description);
  const [priorityColor, setPriorityColorColor] = useState(color);
  const [deadline, setDeadline] = useState(date);

  const handleChangeColor = value => {
    setPriorityColorColor(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (errorCirillicaDescription || errorCirillicaTitle) {
      return;
    }
    if (value === '') {
      setIsValid(true);
      setTimeout(() => setIsValid(false), 3500);
    } else {
      const newCard = {
        value,
        coment,
        color: priorityColor,
        date: new Date(deadline).toISOString(),
      };
      onSubmit(newCard);
      handleToggleModal();
    }
  };

  const handleChange = e => {
    const cyrillicRegex = /^[a-zA-Z]+$/;
    setValue(e.target.value);

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

  const handleChangeDescription = e => {
    const cyrillicRegex = /^[a-zA-Z]+$/;
    setComent(e.target.value);

    if (e.target.value.length > 0 && !cyrillicRegex.test(e.target.value)) {
      setErrorCirillicaDescription(true);
      e.preventDefault();
    } else {
      setErrorCirillicaDescription(false);
    }

    if (e.target.value.length === 200) {
      setErrorMaxLengthDescription(true);
    } else {
      setErrorMaxLengthDescription(false);
    }
  };

  return (
    <Modal title={modalTitle} onClose={handleToggleModal}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={value}
          placeholder={'Title'}
          maxLength="64"
          onChange={handleChange}
        />
        {isValid && <p className={s.errorTitle}>required field</p>}
        {errorTitleMaxLength && (
          <p className={s.errorTitleMaxLength}>Maximum number of characters</p>
        )}
        {errorCirillicaTitle && !errorTitleMaxLength && (
          <p className={s.errorCirillicaTitle}>Unavailable characters</p>
        )}
        <textarea
          onChange={handleChangeDescription}
          className={`${s.textAreaStyle} ${s[theme]}`}
          name="coments"
          id="coments"
          placeholder="Description"
          value={coment}
          maxLength="200"
        ></textarea>
        {errorMaxLengthDescription && (
          <p className={s.errortextAreaMaxLength}>
            Maximum number of characters
          </p>
        )}
        {errorCirillicaDescription && !errorMaxLengthDescription && (
          <p className={s.errortextAreaCirillica}>Unavailable characters</p>
        )}
        <BoxRadioColorGroup
          valueChange={handleChangeColor}
          deadline={priorityColor}
        />
        {theme === 'dark' && (
          <CalendarDark onDate={setDeadline} deadline={deadline} />
        )}
        {theme === 'light' && (
          <CalendarLight onDate={setDeadline} deadline={deadline} />
        )}
        {theme === 'colorful' && (
          <CalendarColorful onDate={setDeadline} deadline={deadline} />
        )}
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

CardModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string,
  titleModalButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  handleToggleModal: PropTypes.func,
  id: PropTypes.func,
  description: PropTypes.string,
  date: PropTypes.string,
  color: PropTypes.string,
};
