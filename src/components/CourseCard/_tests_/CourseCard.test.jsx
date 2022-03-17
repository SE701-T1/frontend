/* eslint-disable testing-library/await-async-query */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CourseCard from '../CourseCard';

describe('Course Component test', () => {
  test('should display the data', () => {
    render(
      <CourseCard
        courseName="Softeng 701"
        semesterNumber="2022 sem 1"
        numbOfStudents={20}
        numOfBuddies={0}
      />,
    );

    expect(screen.getByText('Softeng 701')).toBeInTheDocument();
    expect(screen.getByText('2022 sem 1')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});

describe('Selected Course Component test', () => {
  test('should display border', () => {
    render(
      <CourseCard
        courseName="Softeng 701"
        semesterNumber="1"
        numbOfStudents={20}
        numOfBuddies={0}
      />,
    );

    // eslint-disable-next-line testing-library/no-promise-in-fire-event
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByTestId('tickIcon'));
  });
});
