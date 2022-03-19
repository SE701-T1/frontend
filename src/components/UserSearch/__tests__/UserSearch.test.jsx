/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserSearch from '../UserSearch';

// unit tests
describe('User search test', () => {
  test('should display the placeholder text', () => {
    render(<UserSearch />);

    expect(screen.getByPlaceholderText('Type a name')).toBeInTheDocument();
  });

  test('should display the search icon', () => {
    render(<UserSearch />);

    expect(screen.getByTestId('searchIcon'));
  });

  test('check that handle submit works after clicking search icon', () => {
    const mockOnClick = jest.fn();

    const { getByTestId } = render(<UserSearch submitSearch={mockOnClick()} />);

    const clickIndicator = getByTestId('searchIcon');

    fireEvent.click(clickIndicator);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
