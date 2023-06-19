import s from './BoardList.module.scss';
import BoardItem from '../BoardItem/BoardItem';
import sprite from '../../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';

const BoardList = ({ theme }) => {
  return (
    <ul className={s.list}>
      <BoardItem
        boardName="Project office"
        icon={`${sprite}#icon-project`}
        theme={theme}
        current={true}
      />
      <BoardItem
        boardName="Neon Light Project"
        icon={`${sprite}#icon-puzzle-piece`}
        theme={theme}
      />
    </ul>
  );
};

BoardList.propTypes = {
  theme: PropTypes.string.isRequired,
};
export default BoardList;
