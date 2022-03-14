import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '../Nav';

describe('Navigation Bar', () => {
  test('should display child inside warper', () => {
    render(
      <BrowserRouter>
        <Nav>
          <div>Child</div>
        </Nav>
      </BrowserRouter>,
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
