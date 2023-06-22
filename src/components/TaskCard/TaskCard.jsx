import { useState, useSelector } from 'react';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import sprite from '../../assets/icons/sprite.svg';
import { selectorTheme } from 'redux/Auth/authSelectors';
import { TaskControlButton } from '../TaskControlButton/TaskControlButton';
import { ModalChangeColumn } from 'components/ModalChangeColumn/ModalChangeColumn';
import { BackdropModal } from 'components/BackdropMain/BackdropMain';
import s from './TaskCard.module.scss';

export const TaskCard = ({
  id,
  title,
  description,
  priority = 'High',
  deadline,
  editCard,
  removeCard,
}) => {
  const theme = useSelector(selectorTheme);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalChangeColumn = () => {
    setIsModalOpen(true);
  };

  const closeModalChangeColumn = () => setIsModalOpen(false);

  return (
    <li key={id} className={clsx(s.cardWrapper, s[theme])}>
      <div
        className={clsx(
          s.priorityLine,
          priority === 'Low' && s.bg_low,
          priority === 'Medium' && s.bg_medium,
          priority === 'High' && s.bg_high,
        )}
      ></div>
      <div className={s.infoWrapper}>
        <h4 className={clsx(s.title, s[theme])}>
          {title}
          Lorem, ipsum dolor.
        </h4>
        <p className={clsx(s.description, s[theme])}>
          {description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          laboriosam numquam vero totam quidem nostrum deserunt harum voluptate,
          quaerat illum.
        </p>
      </div>
      <div className={clsx(s.controlPanel, s[theme])}>
        <div className={s.statusInfo}>
          <div className={s.priorityWrapper}>
            <h5 className={clsx(s.subtitle, s[theme])}>Priority</h5>
            <div className={s.priorityStatus}>
              <div
                className={clsx(
                  s.priorityCircle,
                  priority === 'Low' && s.bg_low,
                  priority === 'Medium' && s.bg_medium,
                  priority === 'High' && s.bg_high,
                )}
              ></div>
              <p className={clsx(s.text, s[theme])}>{priority}</p>
            </div>
          </div>
          <div>
            <h5 className={clsx(s.subtitle, s[theme])}>Deadline</h5>
            <p className={clsx(s.text, s[theme])}>
              {deadline}
              12/05/2023
            </p>
          </div>
        </div>
        <div className={s.iconsWrapper}>
          <svg className={clsx(s.icon, s[theme])}>
            <use href={sprite + '#icon-bell'}></use>
          </svg>
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
              <TaskControlButton icon="#icon-pencil" onClick={editCard} />
            </li>
            <li key={shortid.generate()} className={s.item}>
              <TaskControlButton icon="#icon-trash" onClick={removeCard} />
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <BackdropModal closeModal={closeModalChangeColumn}>
          <ModalChangeColumn closeModal={closeModalChangeColumn} />
        </BackdropModal>
      )}
    </li>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  deadline: PropTypes.string,
  editCard: PropTypes.func,
  removeCard: PropTypes.func,
};
