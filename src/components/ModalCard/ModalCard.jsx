import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import PropTypes from 'prop-types';
import s from './ModalCard.module.scss';
import { useState } from 'react';
// import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
import { SelectData } from 'components/SelectData/SelectData';
import { BoxRadioBackgroundGroup } from 'components/BoxRadioBackgroundGroup/BoxRadioBackgroundGroup';
import { BoxRadioIconGroup } from 'components/BoxRadioIconGroup/BoxRadioIconGroup';

export const ModalCard = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const [coment, setComent] = useState('');
  const [isColor, setIsColor] = useState('dark');
  const [isBack, setIsBack] = useState('dark');
  const [date, setDate] = useState('');
  const [icon, setIcon] = useState('');
  const handleAddCard = value => {
    const newCard = {
      value,
      coment: coment,
      color: isColor,
      isBack,
      date,
    };
    onClick(newCard);
  };

  const handleChangeBackground = value => {
    setIsBack(value);
  };
  // const handleChangeColor = value => {
  //   setIsColor(value);
  // };

  const handleChangeDate = value => {
    setDate(value);
  };

  return (
    <ModalColumn
      modalTitle={modalTitle}
      inputTitle={inputTitle}
      titleModalButton={titleModalButton}
      onClick={handleAddCard}
      handleToggleModal={handleToggleModal}
    >
      <BoxRadioIconGroup onValue={setIcon} />
      {/* <textarea
        onChange={e => setComent(e.target.value)}
        className={s.description}
        name="coments"
        id="coments"
        placeholder="Description"
        value={coment}
      ></textarea> */}
      {/* <BoxRadioColorGroup valueChange={handleChangeColor} /> */}
      {/* <SelectData onDate={setDate} /> */}
      {/* <BoxRadioBackgroundGroup valueChange={handleChangeBackground} /> */}
    </ModalColumn>
  );
};

ModalCard.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
