import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import Example from '../../components/Example';
import Dashboard from '../Dashboard';
import Login from '../Login/Login';

function Routes() {
  return (
    
      <Switch>
        <Route path="/courses" element={<Example />} />
        <Route path="/find-matches" element={<Example />} />
        <Route path="/chat" element={<Example />} />
        <Route path="/accounts" element={<Example />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Switch>
    
  );
}
export default Routes;
