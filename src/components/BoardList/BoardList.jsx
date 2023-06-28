import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BoardItem } from '../BoardItem/BoardItem';
import sprite from 'assets/icons/sprite.svg';
import s from './BoardList.module.scss';

export const BoardList = ({ onCLose, theme, boards, currentBoard }) => {
  const [current, setCurrent] = useState(currentBoard?._id);
  console.log(currentBoard);

  const onClick = id => {
    setCurrent(id);
    if (onCLose) onCLose();
  };
  useEffect(() => {
    setCurrent(currentBoard?._id);
  }, [currentBoard?._id]);

  return (
    <ul className={s.list}>
      {boards.map(({ title, icon, _id }) => (
        <BoardItem
          key={_id}
          boardName={title}
          icon={`${sprite}#${icon}`}
          theme={theme}
          id={_id}
          onClick={() => onClick(_id)}
          isCurrent={current === _id && true}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
  boards: PropTypes.array,
  onCLose: PropTypes.func,
  currentBoard: PropTypes.object,
};
