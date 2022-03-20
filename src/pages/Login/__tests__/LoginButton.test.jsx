import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../LoginButton';

describe('Render Login Button', () => {
  test('should display the login button text', () => {
    render(<Login />);

    expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
  });
});
