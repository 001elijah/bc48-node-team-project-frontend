import clsx from 'clsx';
import PropTypes from 'prop-types';

export const Container = ({ children, className = '' }) => {
  return <div className={clsx('container', className)}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
