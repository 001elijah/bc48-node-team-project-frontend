import s from './HeaderDashBoard.module.scss';
import svg from '../../assets/icons/sprite.svg';
import { useEffect, useState } from 'react';
import { ModalFilter } from '../ModalFilter/ModalFilter';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { BackdropModal } from '../BackdropMain/BackdropMain';
import { addFilters } from '../../redux/Filter/filterOperation';
import { updateBoard, getBoardById } from '../../redux/Boards/boardsOperations';
import { currentBoard } from '../../redux/Boards/boardsSelectors';
import { Notify } from 'notiflix';

export const HeaderDashBoard = ({ title }) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const board = useSelector(currentBoard);
  const [showModalWindow, setShowModalWindow] = useState(false);
  const handleModalWindowOpen = () => {
    if (!board) {
      Notify.failure('You need to create or select a board');
      return;
    }
    setShowModalWindow(true);
  };
  const handleModalWindowClose = () => {
    setShowModalWindow(false);
    dispatch(getBoardById(board._id));
  };

  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    showModalWindow && dispatch(addFilters(color));
  }, [color]);

  useEffect(() => {
  const updateBoardAndFetch = async () => {
    if (showModalWindow && icon) {
      await dispatch(updateBoard({ back: icon, board }));
      dispatch(getBoardById(board._id));
    }
  };

  updateBoardAndFetch();
}, [icon, showModalWindow]);

  return (
    <>
      <div className={clsx(s.HeaderDash, s[theme])}>
        {title && (
          <span className={clsx(s.HeaderTitle, s[theme])}>{title}</span>
        )}
        <button
          className={clsx(s.HeaderFilter, s[theme])}
          onClick={handleModalWindowOpen}
          type="button"
        >
          <svg className={s.Svg} width="16" height="16">
            <use href={`${svg}#icon-${'filter'}`} />
          </svg>
          Filter
        </button>
        {showModalWindow && (
          <BackdropModal closeModal={handleModalWindowClose}>
            <ModalFilter
              closeModal={handleModalWindowClose}
              colorNew={setColor}
              iconNew={setIcon}
            />
          </BackdropModal>
        )}
      </div>
    </>
  );
};

HeaderDashBoard.propTypes = {
  title: PropTypes.string,
};
