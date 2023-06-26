import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
import { CalendarDark } from 'components/CalendarDark/CalendarDark';
import s from './CardModalWindow.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const CardModalWindow = ({
  modalTitle,
  inputTitle,
  titleModalButton,
  onSubmit,
  handleToggleModal,
}) => {
  const theme = useSelector(selectorTheme);

  const [value, setValue] = useState('');
  const [coment, setComent] = useState('');
  const [color, setColor] = useState('dark');
  const [date, setDate] = useState('');

  const handleChangeColor = value => {
    setColor(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newCard = {
      value,
      coment,
      color,
      date,
    };

    onSubmit(newCard);
    handleToggleModal();
  };

  return (
    <Modal title={modalTitle} onClose={handleToggleModal}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={value}
          placeholder={inputTitle}
          onChange={e => setValue(e.target.value)}
        />
        <textarea
          onChange={e => setComent(e.target.value)}
          className={`${s.textAreaStyle} ${s[theme]}`}
          name="coments"
          id="coments"
          placeholder="Description"
          value={coment}
        ></textarea>
        <CalendarDark onDate={setDate} />
        <BoxRadioColorGroup valueChange={handleChangeColor} />
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
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  handleToggleModal: PropTypes.func,
};
