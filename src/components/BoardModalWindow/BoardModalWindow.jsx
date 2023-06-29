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
  modalTitle,
  titleModalButton,
  onSubmit,
  handleToggleModal,
  activeIcon = 'icon-project',
}) => {
  const theme = useSelector(selectorTheme);
  const [title, setTitle] = useState(inputTitle);
  const [background, setBackground] = useState('null');
  const [icon, setIcon] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

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

  return (
    <Modal title={modalTitle} onClose={handleToggleModal}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={title}
          placeholder={'Title'}
          onChange={e => setTitle(e.target.value)}
        />
        {isValid && <p className={s.errorTitle}>required field</p>}

        <BoxRadioIconGroup valueChange={setIcon} activeIcon={activeIcon} />
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
  inputTitle: PropTypes.string,
  titleModalButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  handleToggleModal: PropTypes.func,
  id: PropTypes.func,
  activeIcon: PropTypes.string,
};
