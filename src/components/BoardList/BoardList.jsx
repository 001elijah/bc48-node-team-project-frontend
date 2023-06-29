import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BoardItem } from '../BoardItem/BoardItem';
import sprite from 'assets/icons/sprite.svg';
import s from './BoardList.module.scss';
import shortid from 'shortid';

export const BoardList = ({ theme, boards, currentBoard }) => {
  const [current, setCurrent] = useState(currentBoard?._id);

  const onClick = id => {
    setCurrent(id);
  };
  useEffect(() => {
    setCurrent(currentBoard?._id);
  }, [currentBoard?._id]);
  return (
    <ul className={s.list}>
      {boards.map(({ title, icon, _id }) => (
        <BoardItem
          key={shortid.generate()}
          boardName={title}
          icon={`${sprite}#${icon}`}
          theme={theme}
          id={_id}
          onClick={onClick}
          isCurrent={current === _id && true}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
  boards: PropTypes.array,
  currentBoard: PropTypes.object,
};
