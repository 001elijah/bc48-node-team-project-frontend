import PropTypes from 'prop-types';

import s from './BackdropHome.module.scss';

export const BackdropHome = ({ children }) => {
  return <main className={s.background}>{children}</main>;
};

BackdropHome.propTypes = {
  children: PropTypes.node.isRequired,
};
