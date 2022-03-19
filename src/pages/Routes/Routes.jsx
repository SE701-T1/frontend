import React from 'react';
import { Route, Routes as Switch, Navigate } from 'react-router-dom';

import Example from '../../components/Example';
import AuthRoute from './AuthRoute';

import Login from '../Login/Login';
import Pairing from '../Pairing/Pairing';
import Chat from '../Chat/Chat';
import Upload from '../Upload/UploadPage';

function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path="/courses" element={<Upload />} />
        <Route path="/find-matches" element={<Pairing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/accounts" element={<Example />} />
        <Route path="/" element={<Navigate to="/courses" />} />
      </Route>
    </Switch>
  );
}
export default Routes;
