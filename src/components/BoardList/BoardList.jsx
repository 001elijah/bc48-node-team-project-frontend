import s from './BoardList.module.scss';
import { BoardItem } from '../BoardItem/BoardItem';
import sprite from 'assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const BoardList = ({ theme, boards }) => {
  const [current, setCurrent] = useState(null);

  return (
    <ul className={s.list}>
      {boards.map(({ title, icon, _id }) => (
        <BoardItem
          key={_id}
          boardName={title}
          icon={`${sprite}#${icon}`}
          theme={theme}
          id={_id}
          onClick={() => setCurrent(_id)}
          isCurrent={current === _id && true}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
  boards: PropTypes.array,
};
