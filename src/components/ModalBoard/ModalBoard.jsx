import PropTypes from 'prop-types';
import { ModalColumn } from 'components/ModalColumn/ModalColumn';
export const ModalBoard = ({
  inputTitle,
  modalTitle,
  titleModalButton,
  onClick,
  handleToggleModal,
}) => {
  const input = inputTitle;
  return (
    <ModalColumn
      inputTitle={inputTitle}
      modalTitle={modalTitle}
      titleModalButton={titleModalButton}
      onClick={onClick}
      handleToggleModal={handleToggleModal}
    >
      <h1>{input}</h1>
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
