import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Login from '../Login/Login';
import AuthRoute from './AuthRoute';
import Dashboard from '../Dashboard';
import Example from '../../components/Example';

function Routes() {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route
        path="/courses"
        element={
          <AuthRoute>
            <Example />
          </AuthRoute>
        }
      />
      <Route
        path="/find-matches"
        element={
          <AuthRoute>
            <Example />
          </AuthRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <AuthRoute>
            <Example />
          </AuthRoute>
        }
      />
      <Route
        path="/accounts"
        element={
          <AuthRoute>
            <Example />
          </AuthRoute>
        }
      />
      <Route
        path="/"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
    </Switch>
  );
}
export default Routes;
