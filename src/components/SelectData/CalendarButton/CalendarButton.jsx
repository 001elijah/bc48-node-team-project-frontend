import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import s from './CalendarButton.module.scss';
// eslint-disable-next-line react/display-name

export const CalendarButton = forwardRef(({ value, onClick }, ref) => (
  <button className={s.input_field} onClick={onClick} ref={ref}>
    {value}
    {/* add icon*/}
  </button>
));

CalendarButton.displayName = 'CustomsButton';

CalendarButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
