import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import CoursesPageCard from '../CoursesPageCard';

describe('Render Courses Card with no buddy name props', () => {
  it('should display Course Title', () => {
    render(<CoursesPageCard courseName="SE751" />);

    expect(screen.getByText(/SE751/i)).toBeInTheDocument();
  });
  it('should display find buddy button', () => {
    render(<CoursesPageCard courseName="SE751" />);

    expect(screen.getByRole('button', { name: /Find a buddy/i })).toBeInTheDocument();
  });
});

describe('Courses Card render with buddy name and course name', () => {
  it('should display buddy name', () => {
    render(<CoursesPageCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/Example Name/i)).toBeInTheDocument();
  });
});

it('produces correct snapshot of the CoursesPageCard', () => {
  const tree = renderer
    .create(<CoursesPageCard buddyName="Example Name" courseName="SE751" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
