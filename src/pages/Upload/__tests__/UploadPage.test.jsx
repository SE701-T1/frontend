import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UploadPage from '../UploadPage';

describe('On UploadPage render', () => {
  test('should display upload button text', () => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>,
    );

    expect(screen.getByText(/upload timetable/i)).toBeInTheDocument();
  });
  test('should display input text field', () => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>,
    );

    expect(screen.getByLabelText(/enter url/i)).toBeInTheDocument();
  });
  test('should display download link', () => {
    render(
      <BrowserRouter>
        <UploadPage />
      </BrowserRouter>,
    );

    expect(screen.getByRole(/link/i)).toBeInTheDocument();
  });
});
