import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { Modal } from 'components/Modal/Modal';
import sprite from '../../assets/icons/sprite.svg';
import s from './ReusableColumnModalWindow.module.scss';
import { addNewBoard } from '../../redux/Boards/boardsOperations';

export const ReusableColumnModalWindow = ({
  inputTitle,
  titleModalButton,
  handleToggleModal,
  modalTitle,
  onClick,
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const theme = useSelector(selectorTheme);

  const handleSubmit = () => {
    console.log(title);
    // dispatch(addNewColumn(title));
    setValue('');
  };

  return (
    <Modal title={modalTitle} onClose={handleToggleModal}>
      <form onSubmit={handleSubmit}>
        <input
          className={`${s.inputModal} ${s[theme]}`}
          value={title}
          placeholder={inputTitle}
          onChange={e => setTitle(e.target.value)}
        />

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

ReusableColumnModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func,
  id: PropTypes.func,
};
