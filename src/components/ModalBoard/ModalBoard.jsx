import PropTypes from 'prop-types';
import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import { useState } from 'react';
import { BoxRadioIconGroup } from 'components/BoxRadioIconGroup/BoxRadioIconGroup';
import { BoxRadioBackgroundGroup } from 'components/BoxRadioBackgroundGroup/BoxRadioBackgroundGroup';

export const ModalBoard = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const [isBack, setIsBack] = useState('dark');
  const [icon, setIcon] = useState('');

  const handleAddBoard = value => {
    const newCard = {
      value,
      icon,
      isBack,
    };
    onClick(newCard);
  };

  return (
    <ModalColumn
      inputTitle={inputTitle}
      modalTitle={modalTitle}
      titleModalButton={titleModalButton}
      onClick={handleAddBoard}
      handleToggleModal={handleToggleModal}
    >
      <BoxRadioIconGroup valueChange={setIcon} />
      <BoxRadioBackgroundGroup valueChange={setIsBack} />
    </ModalColumn>
  );
};

ModalBoard.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
