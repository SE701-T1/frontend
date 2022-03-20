import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import LoadingComponent from '../LoadingComponent';

describe('Render Loading Component', () => {
  it('LoadingComponent test', () => {
    render(<LoadingComponent />);
    expect(screen.getByTestId('loading'));
  });

  // snapshot test
  it('produces correct snapshot of the loading', () => {
    const tree = renderer.create(<LoadingComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
