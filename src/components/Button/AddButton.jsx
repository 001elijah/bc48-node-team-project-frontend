import s from './Button.module.scss';
import svg from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';

export const AddButton = ({title, stroke}) => {
  return (
    <>
      <div className={s.Button}>
        <div className={s.BoxPlus}>
          <svg stroke={stroke}  width="16" height="16">
            <use href={`${svg}#icon-${'plus'}`} />
          </svg>
        </div>
        <p className={s.TitleCard}>{title}</p>
      </div>
    </>
  );
};

AddButton.propTypes = {
  title:PropTypes.string,
  stroke:PropTypes.string,}