import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useSelector } from 'react-redux';
import s from './CalendarButton.module.scss';

import IconCalendar from 'components/IconCalendar/IconCalendar';

export const CalendarButton = forwardRef(({ value, onClick }, ref) => {
  const theme = useSelector(selectorTheme);

  const curentDays = new Date(value).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  const valueDay = curentDays.split(',');
  const result = valueDay[0] + ',' + value.split(',')[1] + value.split(',')[2];

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
