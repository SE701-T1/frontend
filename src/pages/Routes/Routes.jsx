import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Dashboard from '../Dashboard';
import UploadPage from '../../components/Timetable';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Dashboard />} />
      <Route path="/upload" element={<UploadPage />} />
    </Switch>
  );
}
export default Routes;
