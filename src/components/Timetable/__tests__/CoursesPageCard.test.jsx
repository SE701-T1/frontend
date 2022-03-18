import React from 'react';
import { render, screen } from '@testing-library/react';
import CoursesPageCard from '../CoursesPageCard';

describe('Render Courses Card with no buddy name props', () => {
  test('should display Course Title', () => {
    render(<CoursesPageCard courseName="SE751" />);

    expect(screen.getByText(/SE751/i)).toBeInTheDocument();
  });
  test('should display find buddy button', () => {
    render(<CoursesPageCard courseName="SE751" />);

    expect(screen.getByRole('button', { name: /Find a buddy/i })).toBeInTheDocument();
  });
});

describe('Courses Card render with buddy name and course name', () => {
  test('should display buddy name', () => {
    render(<CoursesPageCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/Example Name/i)).toBeInTheDocument();
  });
});
