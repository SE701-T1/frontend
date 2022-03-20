import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Example from '../Example';

describe('Example Components', () => {
  it('should display example test', () => {
    render(<Example />);

    expect(screen.getByText('This is an example component.')).toBeInTheDocument();
  });

  // snapshot test
  it('produces correct snapshot of the example', () => {
    const tree = renderer.create(<Example />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
