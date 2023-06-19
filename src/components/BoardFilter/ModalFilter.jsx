import s from './Modal.module.scss';
import svg from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import LabelBlock from './LabelBlock';
import BackgroundBlock from './BackgroundBlock';

export const ModalFilter = ({ closeModal }) => {
  return (
    <>
      <div className={s.Wrapper}>
        <button onClick={closeModal} className={s.Button}>
          <svg className={s.Svg} width="18" height="18">
            <use href={`${svg}#icon-${'x-close'}`} />
          </svg>
        </button>
        <div className={s.TitleBlock}>
          <span className={s.HeadTitle}>Filters</span>
        </div>
        <BackgroundBlock />
        <div className={s.TextLine}>
          <span className={s.Title}>Label color</span>
          <span className={s.Showall}>Show all</span>
        </div>
        <LabelBlock />
      </div>
    </>
  );
};
ModalFilter.propTypes = {
  closeModal: PropTypes.func,
};
