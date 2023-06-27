import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import sprite from '../../assets/icons/sprite.svg';
import { removeCard } from 'redux/Cards/cardsOperations';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from '../TaskControlButton/TaskControlButton';
import { ModalChangeColumn } from 'components/ModalChangeColumn/ModalChangeColumn';
import { BackdropModal } from 'components/BackdropMain/BackdropMain';
import s from './TaskCard.module.scss';

export const TaskCard = ({
  id,
  title,
  description,
  label = 'Low',
  deadline = '26/06/2023',
  boardId,
  columnId,
}) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const [isModalChangeOpen, setIsModalChangeOpen] = useState(false);
  // const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const date = new Date();
  // const currentTime = `${date.toISOString().split('T')[0]} ${
  //   date.toTimeString().split(' ')[0]
  // }`;
  // const isDeadline = deadline === currentTime.slice(0, -3);
  const isDeadline = deadline === date.toLocaleDateString('en-GB');
  // console.log(date);
  const openModalChangeColumn = () => {
    setIsModalChangeOpen(true);
  };

  const closeModalChangeColumn = () => setIsModalChangeOpen(false);

  // const openModalEditCard = () => {
  //   setIsModalEditOpen(true);
  // };
  // const closeModalEditCard = () => {
  //   setIsModalEditOpen(false);
  // };

  return (
    <li className={clsx(s.cardWrapper, s[theme])}>
      <div
        className={clsx(
          s.priorityLine,
          label === 'Medium' && s.bg_medium,
          label === 'High' && s.bg_high,
          label === 'Low' && s.bg_low,
        )}
      ></div>
      <div className={s.infoWrapper}>
        <h4 className={clsx(s.title, s[theme])}>{title}</h4>
        <p className={clsx(s.description, s[theme])}>{description}</p>
      </div>
      <div className={clsx(s.controlPanel, s[theme])}>
        <div className={s.statusInfo}>
          <div className={s.priorityWrapper}>
            <h5 className={clsx(s.subtitle, s[theme])}>Priority</h5>
            <div className={s.priorityStatus}>
              <div
                className={clsx(
                  s.priorityCircle,
                  label === 'Low' && s.bg_low,
                  label === 'Medium' && s.bg_medium,
                  label === 'High' && s.bg_high,
                )}
              ></div>
              <p className={clsx(s.text, s[theme])}>{label}</p>
            </div>
          </div>
          <div>
            <h5 className={clsx(s.subtitle, s[theme])}>Deadline</h5>
            <p className={clsx(s.text, s[theme])}>{deadline}</p>
          </div>
        </div>
        <div className={s.iconsWrapper}>
          {isDeadline && (
            <svg className={clsx(s.icon, s[theme])}>
              <use href={sprite + '#icon-bell'}></use>
            </svg>
          )}
          <ul className={s.buttonList}>
            <li key={shortid.generate()} className={s.item}>
              <TaskControlButton
                icon="#icon-arrow"
                onClick={() => {
                  openModalChangeColumn();
                }}
              />
            </li>
            <li key={shortid.generate()} className={s.item}>
              <TaskControlButton
                icon="#icon-pencil"
                onClick={() => {
                  // openModalEditCard();
                }}
              />
            </li>
            <li key={shortid.generate()} className={s.item}>
              <TaskControlButton
                icon="#icon-trash"
                onClick={() => dispatch(removeCard(id))}
              />
            </li>
          </ul>
        </div>
      </div>
      {isModalChangeOpen && (
        <BackdropModal closeModal={closeModalChangeColumn}>
          <ModalChangeColumn
            closeModal={closeModalChangeColumn}
            boardId={boardId}
            columnId={columnId}
            cardId={id}
          />
        </BackdropModal>
      )}
      {/* {isModalEditOpen && <ModalEditCard closeModal={closeModalEditCard} />} */}
    </li>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  deadline: PropTypes.string,
  boardId: PropTypes.string,
  columnId: PropTypes.string,
};
