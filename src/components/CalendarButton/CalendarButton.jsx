import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import s from './CalendarButton.module.scss';
import moment from 'moment/moment';
import IconCalendar from 'components/IconCalendar/IconCalendar';

export const CalendarButton = forwardRef(({ value, onClick }, ref) => {
  const theme = useSelector(selectorTheme);

  const curentDays = moment(value).format('LLLL');
  const valueDay = curentDays.split(',');
  const result = valueDay[0] + ',' + valueDay[1];

  return (
    <div className={s.container}>
      <h4 className={`${s.title} ${s[theme]}`}>Deadline</h4>
      <button
        className={`${s.input_field} ${s[theme]}`}
        onClick={onClick}
        ref={ref}
        type="button"
      >
        {result}
        <IconCalendar />
      </button>
    </div>
  );
});

CalendarButton.displayName = 'CustomsButton';

CalendarButton.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
