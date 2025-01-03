import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserRole } from '../utils/Auth';

const ProtectedRoute = ({ element, requiredRole }) => {
  const token = sessionStorage.getItem('token');
  const role = getUserRole();

  if (!token) {
    return <Navigate to='/signin' replace />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to='/' replace />;
  }

  return element;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
  requiredRole: PropTypes.string,
};

export default ProtectedRoute;
