import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectorTheme } from 'redux/Auth/authSelectors';
import sprite from '../../assets/icons/sprite.svg';
import { getAllColumns } from 'redux/Column/columnOperations';
import s from './ModalChangeColumn.module.scss';



export const ModalChangeColumn = ({ closeModal,boardId,columnId }) => {
  const dispatch =useDispatch()
  const theme = useSelector(selectorTheme);
  const columnList = [
    { id: 1, name: 'to do' },
    { id: 2, name: 'in progress' },
    { id: 3, name: 'done' },
  ];

  useEffect(() => {
  dispatch(getAllColumns(boardId))
},[dispatch])

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
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
};
