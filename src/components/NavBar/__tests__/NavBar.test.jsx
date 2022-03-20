import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '../NavBar';

describe('Navigation Wrapper', () => {
  it('should display app name in app bar', () => {
    render(<NavBar open={false} handleOpen={() => {}} drawerWidth={240} />);
    expect(screen.getByText('Class Buddy Matcher')).toBeInTheDocument();
  });

  it('should open when pressing open button', () => {
    const mockHandleOpen = jest.fn();

    render(<NavBar open={false} handleOpen={mockHandleOpen} drawerWidth={240} />);

    fireEvent.click(screen.getByLabelText('open drawer'));
    expect(mockHandleOpen).toBeCalledTimes(1);
  });
});
