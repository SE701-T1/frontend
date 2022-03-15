import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingComponent from '../LoadingComponent';

describe('Render Loading Component', () => {
  test('LoadingComponent test', () => {
    render(<LoadingComponent />);
    expect(screen.getByTestId('loading'));
  });
});
