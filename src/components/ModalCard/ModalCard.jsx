import { ModalColumn } from 'components/ModalColumn/ModalColumn';
import PropTypes from 'prop-types';
import s from './ModalCard.module.css';
import { useState } from 'react';

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
      <div>
        <p>What are your hobbies?</p>
        <input
          type="radio"
          name="color"
          value="music"
          onChange={e => {
            setIsColor(e.target.value);
          }}
          defaultChecked
        />
        <input
          type="radio"
          name="color"
          value="sports"
          onChange={e => {
            setIsColor(e.target.value);
          }}
        />
        <input
          type="radio"
          id="contactChoice3"
          name="color"
          value="mail"
          onChange={e => {
            setIsColor(e.target.value);
          }}
        />
        <input
          type="radio"
          id="contactChoice3"
          name="color"
          value="4"
          onChange={e => {
            setIsColor(e.target.value);
          }}
        />
      </div>
      <input></input>
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
