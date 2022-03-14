import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UploadPage from '../UploadPage';

describe('On UploadPage render', () => {
  test('should display upload button text', () => {
    render(<UploadPage />);

    expect(screen.getByText(/upload timetable/i)).toBeInTheDocument();
  });
  test('should display input text field', () => {
    render(<UploadPage />);

    expect(screen.getByLabelText(/enter url/i)).toBeInTheDocument();
  });
  test('should display download link', () => {
    render(<UploadPage />);

    expect(screen.getByRole(/link/i)).toBeInTheDocument();
  });
});

describe('When submit button clicked on UploadPage', () => {
  test('should call click handler function', () => {
    let testCounter = 0;
    const handleSubmit = () => {
      testCounter += 1;
    };
    render(<UploadPage sendTimetableURL={handleSubmit} />);
    userEvent.click(screen.getByLabelText('submit'));
    expect(testCounter).toEqual(1);
  });
});
