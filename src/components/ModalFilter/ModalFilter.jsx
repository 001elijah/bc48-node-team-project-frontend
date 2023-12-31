import s from './Modal.module.scss';
import svg from '../../assets/icons/sprite.svg';
import PropTypes from 'prop-types';
import { LabelBlock } from './LabelBlock';
import { useEffect, useState } from 'react';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import { BoxRadioBackgroundGroup } from '../BoxRadioBackgroundGroup/BoxRadioBackgroundGroup';
import clsx from 'clsx';

export const ModalFilter = ({ closeModal, colorNew, iconNew }) => {
  const [colorFilter, setColorFilter] = useState('');
  const theme = useSelector(selectorTheme);
  const [icon, setIcon] = useState();

  useEffect(() => {
    colorNew(colorFilter), iconNew(icon);
  }, [colorFilter, icon]);
  return (
    <>
      <div className={clsx(s.Wrapper, s[theme])}>
        <button onClick={closeModal} className={clsx(s.Button, s[theme])}>
          <svg className={clsx(s.Svg, s[theme])} width="18" height="18">
            <use href={`${svg}#icon-${'x-close'}`} />
          </svg>
        </button>
        <div className={clsx(s.TitleBlock, s[theme])}>
          <span className={clsx(s.HeadTitle, s[theme])}>Filters</span>
        </div>
        <BoxRadioBackgroundGroup valueChange={setIcon} />
        <LabelBlock newField={setColorFilter} />
      </div>
    </>
  );
};
ModalFilter.propTypes = {
  closeModal: PropTypes.func,
  colorNew: PropTypes.func,
  iconNew: PropTypes.func,
};
