import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Login from '../Login/Login';
import AuthRoute from './AuthRoute';
import Dashboard from '../Dashboard';
import Pairing from '../Pairing/Pairing';
import Example from '../../components/Example';
import Chat from '../../components/Chat/Chat';

function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path="/courses" element={<Example />} />
        <Route path="/find-matches" element={<Pairing />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/accounts" element={<Example />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Switch>
  );
}
export default Routes;
