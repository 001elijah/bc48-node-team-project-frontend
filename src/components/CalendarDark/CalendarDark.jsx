/* eslint-disable react/display-name */
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear, getDate } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarDark.module.scss';
import PropTypes from 'prop-types';
import { CalendarButton } from '../CalendarButton/CalendarButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CalendarDark = ({ onDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  useEffect(() => {
    onDate(startDate);
  }, [onDate, startDate]);

  return (
    <DatePicker
      dateFormat=", yy, MMMM d"
      selected={startDate}
      calendarClassName={s.calendarConatiner}
      popperClassName={s.popperCustomClass}
      // formatWeekDay={day => day.substr(0, 2)}
      customInput={
        <CalendarButton
          onClick={e => {
            console.log(e.target);
          }}
        />
      }
      onChange={date => setStartDate(date)}
      minDate={new Date()}
      wrapperClassName={s.calendar}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={s.headerWrapper}>
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {'<'}
          </button>
          <div>
            <span>
              {getYear(date)} {months[getMonth(date)]}
            </span>
          </div>
          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

CalendarDark.propTypes = {
  onDate: PropTypes.func,
};
