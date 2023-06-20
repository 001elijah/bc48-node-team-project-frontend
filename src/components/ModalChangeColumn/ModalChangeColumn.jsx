import PropTypes from 'prop-types';
import s from './ModalChangeColumn.module.scss';
import sprite from '../../assets/icons/sprite.svg';

export const ModalChangeColumn = ({ closeModal }) => {
  const columnList = [
    { id: 1, name: 'to do' },
    { id: 2, name: 'in progress' },
    { id: 3, name: 'done' },
  ];
  return (
    <div className={s.modalWrapper}>
      <ul>
        {columnList.map(({ id, name }) => (
          <li key={id} className={s.item}>
            <button
              className={s.button}
              onClick={() => {
                closeModal();
              }}
              type="button"
            >
              {name}{' '}
              <svg className={s.icon}>
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
};
