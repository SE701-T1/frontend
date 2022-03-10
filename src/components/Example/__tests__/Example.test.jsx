import React from 'react';
import { render, screen } from '@testing-library/react';

import Example from '../Example';

describe('Render Example', () => {
  test('should display example test', () => {
    render(<Example />);

    expect(screen.getByText('This is an example component.')).toBeInTheDocument();
  });
});
