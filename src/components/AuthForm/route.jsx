import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

import { selectorIsAuth } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to={redirectTo} />;
};

export const PublicRoute = ({ component, redirectTo = '/home' }) => {
  const isAuth = useSelector(selectorIsAuth);

  return !isAuth ? component : <Navigate to={redirectTo} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};

PublicRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string,
};
