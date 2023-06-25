import s from './HelpWindow.module.scss';
import sprite from 'assets/icons/sprite.svg';
import flower1x from 'assets/images/flower-min.png';
import flower2x from 'assets/images/flower@2x-min.png';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Modal } from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendEmail } from 'redux/Auth/authOperations';

export const HelpWindow = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const onOpen = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const comment = e.target.comment.value;

    dispatch(sendEmail({ email, comment }));
    onClose();
  };

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isModalOpen);

    return () => {
      document.body.classList.remove('body-scroll-lock');
    };
  }, [isModalOpen]);

  return (
    <div className={clsx(s.container, s[theme])}>
      <div className={s.imageContainer}>
        <img
          srcSet={`${flower1x} 1x, ${flower2x} 2x`}
          src={flower1x}
          alt="Example Image"
          className={s.image}
        />
      </div>
      <p className={clsx(s.text, s[theme])}>
        If you need help with{' '}
        <span className={clsx(s.accent, s[theme])}>TaskPro</span>, check out our
        support resources or reach out to our customer support team.
      </p>
      <button
        type="button"
        className={clsx(s.button, s[theme])}
        onClick={onOpen}
      >
        <svg className={clsx(s.icon, s[theme])}>
          <use href={`${sprite}#icon-help`}></use>
        </svg>
        <p className={clsx(s.helpText, s[theme])}>Need help?</p>
      </button>
      {isModalOpen && (
        <Modal title="Need help" onClose={onClose} className={s.modal}>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={s.emailInput}
            />
            <textarea
              type="text"
              name="comment"
              placeholder="Comment"
              className={s.commentInput}
            />
            <button className={s.sendButton}>Send</button>
          </form>
        </Modal>
      )}
    </div>
  );
};

HelpWindow.propTypes = {
  theme: PropTypes.string.isRequired,
};
