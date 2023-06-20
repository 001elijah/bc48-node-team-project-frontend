import PropTypes from 'prop-types';
import clsx from 'clsx';
import s from './ModalChangeColumn.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const ModalChangeColumn = ({ closeModal, theme = 'dark' }) => {
  const columnList = [
    { id: 1, name: 'to do' },
    { id: 2, name: 'in progress' },
    { id: 3, name: 'done' },
  ];
  return (
    <div className={clsx(s.modalWrapper, s[theme])}>
      <ul>
        {columnList.map(({ id, name }) => (
          <li key={id} className={s.item}>
            <button
              className={clsx(s.button, s[theme])}
              onClick={() => {
                closeModal();
              }}
              type="button"
            >
              {name}
              <svg className={clsx(s.icon, s[theme])}>
                <use href={sprite + '#icon-arrow'}></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ModalChangeColumn.propTypes = {
  closeModal: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};
