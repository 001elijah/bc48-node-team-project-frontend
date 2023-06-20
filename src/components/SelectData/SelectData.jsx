// import { forwardRef, useEffect, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import s from './SelectData.module.css';
// import PropTypes from 'prop-types';

// // CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

// export const SelectData = ({ onDate }) => {
//   // const onDate = null;
//   // const datess = FormatDate(Today(), 'dddd, dd MMMM yyyy');

//   const [startDate, setStartDate] = useState(new Date());
//   const ChangeInput = forwardRef(({ value, onClick }, ref) => (
//     <button className={s.input_field} onClick={onClick} ref={ref}>
//       {value}
//       {/* add icon*/}
//     </button>
//   ));

//   useEffect(() => {
//     onDate(startDate);
//   }, [onDate, startDate]);

//   return (
//     <DatePicker
//       dateFormat="DDDD, MMMM d"
//       selected={startDate}
//       customInput={
//         <ChangeInput
//           onClick={e => {
//             console.log(e.target);
//           }}
//         />
//       }
//       onChange={date => setStartDate(date)}
//       minDate={new Date()}
//       wrapperClassName={s.calendar}
//     />
//   );
// };

// SelectData.propTypes = {
//   onDate: PropTypes.func,
//   //   onClick: PropTypes.func.isRequired,
// };
