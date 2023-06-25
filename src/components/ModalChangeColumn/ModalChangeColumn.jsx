import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { selectorTheme } from 'redux/Auth/authSelectors';
import { selectorColumns } from 'redux/Column/columnSelectors';
import { updateCardColumn } from 'redux/Card/cardOperations';
import sprite from '../../assets/icons/sprite.svg';
import s from './ModalChangeColumn.module.scss';

export const ModalChangeColumn = ({ closeModal, columnId = 3 }) => {
  const dispatch = useDispatch();
  // const columnList = useSelector(selectorColumns);
  const theme = useSelector(selectorTheme);
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
              className={clsx(s.button, s[theme], id === columnId && s.current)}
              onClick={() => {
                dispatch(updateCardColumn(id));
                closeModal();
              }}
              type="button"
            >
              {name}
              <svg
                className={clsx(s.icon, s[theme], id === columnId && s.current)}
              >
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
  closeModal: PropTypes.func,
  columnId: PropTypes.string,
};
