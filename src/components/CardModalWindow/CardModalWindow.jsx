import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { ModalColumn } from 'components/ReusableColumnModalWindow/ReusableColumnModalWindow';
import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
import { CalendarDark } from 'components/CalendarDark/CalendarDark';
import s from './CardModalWindow.module.scss';

export const CardModalWindow = ({
  modalTitle,
  inputTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const theme = useSelector(selectorTheme);

  const [coment, setComent] = useState('');
  const [isColor, setIsColor] = useState('dark');
  const [date, setDate] = useState('');

  const handleAddCard = value => {
    const newCard = {
      value,
      coment: coment,
      color: isColor,
      date,
    };
    console.log(newCard);
    // onclick(dispatch(addNewCard());
  };

  const handleChangeColor = value => {
    setIsColor(value);
  };

  return (
    <ModalColumn
      modalTitle={modalTitle}
      inputTitle={inputTitle}
      titleModalButton={titleModalButton}
      onClick={handleAddCard}
      handleToggleModal={handleToggleModal}
    >
      <textarea
        onChange={e => setComent(e.target.value)}
        className={`${s.textAreaStyle} ${s[theme]}`}
        name="coments"
        id="coments"
        placeholder="Description"
        value={coment}
      ></textarea>
      <BoxRadioColorGroup valueChange={handleChangeColor} />
      <CalendarDark onDate={setDate} />
    </ModalColumn>
  );
};

CardModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  handleToggleModal: PropTypes.func,
};
