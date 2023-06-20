import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import PropTypes from 'prop-types';
import s from './ModalCard.module.scss';
import { useState } from 'react';
import { BoxRadioColorGroup } from 'components/BoxRadioColorGroup/BoxRadioColorGroup';
// import { SelectData } from 'components/SelectData/SelectData';

export const ModalCard = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const [coment, setComent] = useState('');
  const [isColor, setIsColor] = useState('dark');
  const handleAddCard = value => {
    const newCard = {
      value,
      coment: coment,
      color: isColor,
    };
    onClick(newCard);
  };
  // const handleChangeColor = value => {
  //   setIsColor(value);
  // };
  const handleChangeBackground = value => {
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
        className={s.description}
        name="coments"
        id="coments"
        placeholder="Description"
        value={coment}
      ></textarea>
      <BoxRadioColorGroup valueChange={handleChangeBackground} />
      {/* <SelectData /> */}
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
