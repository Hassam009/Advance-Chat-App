import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
}

ProtectRoute.propTypes = {
  children: PropTypes.node.isRequired, // Require children prop and it should be a React node
  user: PropTypes.bool.isRequired, // Require user prop and it should be a boolean
  redirect: PropTypes.string // Redirect prop is optional and should be a string
};

export default ProtectRoute;
