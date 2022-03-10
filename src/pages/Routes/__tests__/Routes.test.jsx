import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Routes from '../Routes';

describe('Router Navigation', () => {
  test('should display Dashboard on root directory', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>,
    );
    expect(screen.getByText('Welcome to the Dashboard')).toBeInTheDocument();
  });
});
