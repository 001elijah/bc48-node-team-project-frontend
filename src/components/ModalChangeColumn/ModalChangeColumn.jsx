import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { selectorTheme } from 'redux/Auth/authSelectors';
import { updateCardColumn } from 'redux/Cards/cardsOperations';
import { currentBoard } from 'redux/Boards/boardsSelectors';
import sprite from '../../assets/icons/sprite.svg';
import s from './ModalChangeColumn.module.scss';

export const ModalChangeColumn = ({ closeModal, columnId, cardId }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);

  const { columns: columnList, _id: boardId } = useSelector(currentBoard);

  return (
    <div className={clsx(s.modalWrapper, s[theme])}>
      <ul>
        {columnList.map(({ id, title }) => (
          <li key={id} className={s.item}>
            <button
              className={clsx(s.button, s[theme], id === columnId && s.current)}
              disabled={id === columnId}
              onClick={() => {
                dispatch(updateCardColumn({ id, boardId, cardId }));
                closeModal();
              }}
              type="button"
            >
              <span className={s.title}> {title}</span>
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
  cardId: PropTypes.string,
};
