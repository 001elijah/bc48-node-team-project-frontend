import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth, getYear } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarLight.module.scss';
import PropTypes from 'prop-types';
import { CalendarButton } from '../CalendarButton/CalendarButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CalendarLight = ({ onDate, deadline = String(new Date()) }) => {
  const [startDate, setStartDate] = useState(deadline);
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
      dateFormat="yyyy, MMMM ,d"
      selected={Date.parse(startDate)}
      calendarClassName={s.calendarConatiner}
      popperClassName={s.popperCustomClass}
      calendarStartDay={1}
      // formatWeekDay={day => day.substr(0, 2)}
      customInput={
        <CalendarButton
          value={String(startDate)}
          onClick={e => {
            console.log(e.target);
          }}
        />
      }
      onChange={date => setStartDate(String(date))}
      minDate={new Date()}
      wrapperClassName={s.calendar}
      weekNumber={5}
      renderCustomHeader={({
        date,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={s.headerWrapper}>
          <button
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
            type="button"
          >
            {'<'}
          </button>
          <div>
            <span>
              {getYear(date)} {months[getMonth(date)]}
            </span>
          </div>
          <button
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
            type="button"
          >
            {'>'}
          </button>
        </div>
      )}
    />
  );
};

CalendarLight.propTypes = {
  onDate: PropTypes.func,
  deadline: PropTypes.string,
};
