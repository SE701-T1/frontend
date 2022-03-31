import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Logout() {
  const { logout } = useContext(AuthContext);
  logout();

  return <Navigate to="/login" />;
}
