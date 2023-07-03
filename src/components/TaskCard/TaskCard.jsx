import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import ShowMoreText from 'react-show-more-text';

import sprite from '../../assets/icons/sprite.svg';
import { removeCard, updateCard } from 'redux/Cards/cardsOperations';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from '../TaskControlButton/TaskControlButton';
import { ModalChangeColumn } from 'components/ModalChangeColumn/ModalChangeColumn';
import { BackdropModal } from 'components/BackdropMain/BackdropMain';
import s from './TaskCard.module.scss';
import { CardModalWindow } from 'components/CardModalWindow/CardModalWindow';

export const TaskCard = ({
  id,
  title,
  description,
  label,
  deadline,
  boardId,
  columnId,
}) => {
  const dispatch = useDispatch();
  const theme = useSelector(selectorTheme);
  const [isModalChangeOpen, setIsModalChangeOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);

  const currentDate = new Date().toLocaleDateString('en-GB');
  const endDate = new Date(deadline).toLocaleDateString('en-GB');
  const isDeadline = endDate === currentDate;
  let labelCapitalizeFirstLetter =
    label.charAt(0).toUpperCase() + label.slice(1);

  const openModalChangeColumn = () => {
    setIsModalChangeOpen(true);
  };

  const closeModalChangeColumn = () => setIsModalChangeOpen(false);

  const handleEditCard = dataForm => {
    const { value, coment, color, date } = dataForm;
    dispatch(
      updateCard({
        id,
        title: value,
        description: coment,
        deadline: date,
        label: color,
      }),
    );
  };

  const openModalEditCard = () => {
    setIsModalEditOpen(true);
  };
  const closeModalEditCard = () => {
    setIsModalEditOpen(false);
  };

  return (
    <li className={clsx(s.cardWrapper, s[theme])}>
      <div
        className={clsx(
          s.priorityLine,
          label === 'medium' && s.bg_medium,
          label === 'high' && s.bg_high,
          label === 'low' && s.bg_low,
          label === 'without' && s.bg_without,
          s[theme],
        )}
      ></div>
      <div className={s.infoWrapper}>
        <h4 className={clsx(s.title, s[theme])}>{title}</h4>

        <ShowMoreText
          lines={2}
          more="more"
          less="less"
          anchorClass={clsx(s.showMoreAnchor, s[theme])}
          expanded={false}
          truncatedEndingComponent={'... '}
          className={clsx(s.description, s[theme])}
        >
          {description}
        </ShowMoreText>
      </div>
      <div className={clsx(s.controlPanel, s[theme])}>
        <div className={s.statusInfo}>
          <div className={s.priorityWrapper}>
            <h5 className={clsx(s.subtitle, s[theme])}>Priority</h5>
            <div className={s.priorityStatus}>
              <div
                className={clsx(
                  s.priorityCircle,
                  label === 'low' && s.bg_low,
                  label === 'medium' && s.bg_medium,
                  label === 'high' && s.bg_high,
                  label === 'without' && s.bg_without,
                  s[theme],
                )}
              ></div>
              <p className={clsx(s.text, s[theme])}>
                {labelCapitalizeFirstLetter}
              </p>
            </div>
          </div>
          <div>
            <h5 className={clsx(s.subtitle, s[theme])}>Deadline</h5>
            <p className={clsx(s.text, s[theme])}>{endDate}</p>
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
                  openModalEditCard();
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
      {isModalEditOpen && (
        <CardModalWindow
          modalTitle="Edit card"
          inputTitle={title}
          description={description}
          titleModalButton="Edit"
          handleToggleModal={closeModalEditCard}
          date={deadline}
          color={label}
          onSubmit={handleEditCard}
        />
      )}
    </li>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
};
