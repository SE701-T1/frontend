import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '@mui/material';
import theme from '../../Theme';

import ChatBuddyDetail from '../ChatBuddyDetail';

const mockCourse = [
  {
    courseName: 'SOFTENG 701',
    courseLink: 'https://random.link',
  },
];

describe('ChatBuddyDetail', () => {
  it('should display member', () => {
    render(
      <ThemeProvider theme={theme}>
        <ChatBuddyDetail name="test name" removeBuddy={() => {}} commonCourses={mockCourse} />
      </ThemeProvider>,
    );

    expect(screen.getByText('test name')).toBeInTheDocument();
    expect(screen.getByText('SOFTENG 701')).toBeInTheDocument();
  });

  it('should display active', () => {
    render(
      <ThemeProvider theme={theme}>
        <ChatBuddyDetail
          active
          name="test name"
          removeBuddy={() => {}}
          commonCourses={mockCourse}
        />
      </ThemeProvider>,
    );

    expect(screen.getByText('test name')).toBeInTheDocument();
  });

  it('should removeBuddy when pressed', () => {
    const mockRemoveBuddy = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <ChatBuddyDetail
          name="test name"
          removeBuddy={mockRemoveBuddy}
          commonCourses={mockCourse}
        />
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByTestId('remove-buddy'));
    expect(mockRemoveBuddy).toHaveBeenCalledTimes(1);
  });
});

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={theme}>
        <ChatBuddyDetail name="test name" removeBuddy={() => {}} commonCourses={mockCourse} />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
