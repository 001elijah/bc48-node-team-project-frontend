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
  inputTitle,
  modalTitle,
  titleModalButton,
  onSubmit,
  handleToggleModal,
}) => {
  const theme = useSelector(selectorTheme);
  const [value, setValue] = useState('');
  const [Background, setBackground] = useState('dark');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newCard = {
      value,
      icon,
      Background,
    };
    onSubmit(newCard.icon);
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
        <BoxRadioIconGroup valueChange={setIcon} />
        <BoxRadioBackgroundGroup valueChange={setBackground} />
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
  titleModalButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  handleToggleModal: PropTypes.func,
};
