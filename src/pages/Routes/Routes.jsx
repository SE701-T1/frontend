import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';
import AuthRoute from './AuthRoute';

import Login from '../Login/Login';
import Pairing from '../Pairing/Pairing';
import Chat from '../Chat/Chat';
import Upload from '../Upload/UploadPage';
import Settings from '../Settings/Settings';
import Logout from '../Logout/Logout';

function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route element={<AuthRoute />}>
        <Route path="/courses" element={<Upload />} />
        <Route path="/find-matches" element={<Pairing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/courses" />} />
      </Route>
    </Switch>
  );
}
export default Routes;
