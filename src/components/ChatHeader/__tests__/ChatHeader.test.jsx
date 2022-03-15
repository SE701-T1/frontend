import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material';
import theme from '../../Theme';

import ChatHeader from '../ChatHeader';

describe('TestChatHeader', () => {
  test('should display buddy name', () => {
    render(
      
      <ThemeProvider theme={theme}>
        <ChatHeader
            name="Amy" callBuddy={() => {}}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Amy')).toBeInTheDocument();
  });

  test('should display active text', () => {
    render(
      <ThemeProvider theme={theme}>
        <ChatHeader
          active
          name="Amy" callBuddy={() => {}}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('Active now')).toBeInTheDocument();
  });

  test('should call buddy when pressed', () => {
    const mockCallBuddy = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <ChatHeader
          name="Amy"
          callBuddy={mockCallBuddy}
        />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('call-buddy'));
    expect(mockCallBuddy).toHaveBeenCalledTimes(1);
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ChatHeader name="Amy" callBuddy={() => {}}/>
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
