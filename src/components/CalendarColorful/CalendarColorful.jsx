import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './CalendarColorful.module.scss';
import PropTypes from 'prop-types';
import { CalendarButton } from '../CalendarButton/CalendarButton';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const CalendarColorful = ({ onDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    onDate(startDate);
  }, [onDate, startDate]);

  return (
    <DatePicker
      dateFormat="d, yy, MMMM d"
      selected={startDate}
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
    />
  );
};

CalendarColorful.propTypes = {
  onDate: PropTypes.func,
};
