import React, { useContext } from 'react';
import Redirect from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

/**
 * This component will be used to wrap everything that needs Authentication to access. It uses the
 * 'AuthContext' to check whether the user is authenticated. If yes, then it will continue to show
 * the requested components, otherewise the user is redirected to '/login' which is the login screen.
 */
export default function AuthRoutes({ children }) {
  const { authenticated } = useContext(AuthContext);

  if (authenticated) {
    return children;
  }

  return <Redirect to="/login" />;
}
