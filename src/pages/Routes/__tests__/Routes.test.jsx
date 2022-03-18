import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthContext } from '../../../context/authContext';

import Routes from '../Routes';

describe('Router Navigation', () => {
  test('should display Dashboard on root directory', () => {
    const history = createMemoryHistory();
    render(
      <AuthContext.Provider value={{ authenticated: true }}>
        <BrowserRouter history={history}>
          <Routes />
        </BrowserRouter>
        ,
      </AuthContext.Provider>,
    );
    expect(screen.getByText('Welcome to the Dashboard')).toBeInTheDocument();
  });
});
