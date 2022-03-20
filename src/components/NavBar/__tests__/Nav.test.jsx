import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Nav from '../Nav';

describe('Navigation Bar', () => {
  it('should display child inside warper', () => {
    render(
      <BrowserRouter>
        <Nav>
          <div>Child</div>
        </Nav>
      </BrowserRouter>,
    );
    expect(screen.getByText('Child')).toBeInTheDocument();
  });

  // snapshot test
  it('produces correct snapshot of the Nav', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Nav>
            <div>Child</div>
          </Nav>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
