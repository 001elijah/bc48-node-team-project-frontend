import s from './Columns.module.scss';
import IconSvg from '../Cards/Icons';
import PropTypes from 'prop-types';

export const HeaderOfColums = ({title}) => {
  console.log(title)
  return (
    <>
      <div className={s.HeaderBlock}>
        <h3 className={s.Title}>{title}
        </h3>
        <ul className={s.IconsBlock}>
          <li>{IconSvg('pencil')}</li>
          <li>{IconSvg('trash')}</li>
        </ul>
      </div>
    </>
  );
};

HeaderOfColums.propTypes = {
  title: PropTypes.string,
};
