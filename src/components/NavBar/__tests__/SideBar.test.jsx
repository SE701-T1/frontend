import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import SideBar from '../SideBar';

describe('Navigation Wrapper', () => {
  test('should display menu label when open', () => {
    render(
      <BrowserRouter>
        <SideBar open handleClose={() => {}} drawerWidth={240} />
      </BrowserRouter>,
    );

    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Find Matches')).toBeInTheDocument();
    expect(screen.getByText('Chat')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  test('should change route to course when course is selected', () => {
    render(
      <BrowserRouter>
        <SideBar open handleClose={() => {}} drawerWidth={240} />
      </BrowserRouter>,
    );

    // jsdom cannot change location/url so we need check using for href

    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText('Courses').closest('a')).toHaveAttribute('href', '/courses');
  });

  test('should close sidebar when the chevron left icon is pressed', () => {
    const mockHandleClose = jest.fn();

    render(
      <BrowserRouter>
        <SideBar open handleClose={mockHandleClose} drawerWidth={240} />
      </BrowserRouter>,
    );

    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.click(screen.getByTestId('ChevronLeftIcon').closest('button'));

    expect(mockHandleClose).toBeCalledTimes(1);
  });
});
