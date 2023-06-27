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
          key={title}
          id={_id}
          boardName={title}
          icon={`${sprite}#${icon}`}
          theme={theme}
          isCurrent={current === title && true}
          onClick={() => setCurrent(title)}
        />
      ))}
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
  boards: PropTypes.array,
};
