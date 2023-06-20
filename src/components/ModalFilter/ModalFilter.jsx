import s from './Modal.module.scss';
import svg from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import { LabelBlock } from './LabelBlock';
import { BackgroundBlock } from './BackgroundBlock';
import { useEffect, useState } from 'react';

export const ModalFilter = ({ closeModal, color }) => {
  const [colorFilter, setColorFilter] = useState('');

  useEffect(() => {
    color = colorFilter;
  }, []);
  console.log(colorFilter);
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
        {/* <BackgroundBlock /> */}
        <LabelBlock newField={setColorFilter} />
      </div>
    </>
  );
};
ModalFilter.propTypes = {
  closeModal: PropTypes.func,
  color: PropTypes.string,
};
