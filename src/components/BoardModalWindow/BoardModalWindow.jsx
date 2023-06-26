import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReusableColumnModalWindow } from 'components/ReusableColumnModalWindow/ReusableColumnModalWindow';
import { BoxRadioIconGroup } from 'components/BoxRadioIconGroup/BoxRadioIconGroup';
import { BoxRadioBackgroundGroup } from 'components/BoxRadioBackgroundGroup/BoxRadioBackgroundGroup';

export const BoardModalWindow = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const [background, setBackground] = useState('dark');
  const [icon, setIcon] = useState('');

  const handleAddBoard = value => {
    const newCard = {
      value,
      icon,
      background,
    };
    console.log(newCard);
    // onclick(dispatch(addNewCard());
  };

  return (
    <ReusableColumnModalWindow
      inputTitle={inputTitle}
      modalTitle={modalTitle}
      titleModalButton={titleModalButton}
      onSubmit={handleAddBoard}
      handleToggleModal={handleToggleModal}
      onClick={onClick}
      icon={icon}
      background={background}
    >
      <BoxRadioIconGroup valueChange={setIcon} />
      <BoxRadioBackgroundGroup valueChange={setBackground} />
    </ReusableColumnModalWindow>
  );
};

BoardModalWindow.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  titleModalButton: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  handleToggleModal: PropTypes.func,
};
