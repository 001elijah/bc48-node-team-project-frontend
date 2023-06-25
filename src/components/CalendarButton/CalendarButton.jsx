import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import s from './CalendarButton.module.scss';
import moment from 'moment/moment';
// eslint-disable-next-line react/display-name

export const CalendarButton = forwardRef(({ value, onClick }, ref) => {
  const curentDays = moment(value).format('LLLL');
  const valueDay = curentDays.split(',');
  const result = valueDay[0] + ',' + valueDay[1];

  return (
    <button className={s.input_field} onClick={onClick} ref={ref}>
      {result}
      {/* add icon*/}
    </button>
  );
});

CalendarButton.displayName = 'CustomsButton';

CalendarButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
