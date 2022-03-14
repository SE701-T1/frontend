import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
    </Switch>
  );
}
export default Routes;
