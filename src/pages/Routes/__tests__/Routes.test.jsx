import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AuthContext } from '../../../context/AuthContext';

import Routes from '../Routes';

describe('Router Navigation', () => {
  test('should display Dashboard on root directory', () => {
    const history = createMemoryHistory();
    render(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
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
