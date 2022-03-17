import React from 'react';
import { render, screen } from '@testing-library/react';
import Settings from '../Settings';

describe('Render Login Button', () => {
  test('should display the Toggle text', () => {
    render(<Settings />);

    expect(screen.getByText('ON')).toBeInTheDocument();
  });
    
});