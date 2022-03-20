import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

import UserSearch from '../UserSearch';

// unit tests
describe('User search test', () => {
  it('should display the placeholder text', () => {
    render(<UserSearch />);

    expect(screen.getByPlaceholderText('Type a name')).toBeInTheDocument();
  });

  it('should display the search icon', () => {
    render(<UserSearch />);

    expect(screen.getByTestId('searchIcon'));
  });

  it('check that handle submit works after clicking search icon', () => {
    const mockOnClick = jest.fn();

    render(<UserSearch submitSearch={mockOnClick()} />);

    const clickIndicator = screen.getByTestId('searchIcon');

    fireEvent.click(clickIndicator);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  // snapshot test
  it('produces correct snapshot of the UserSearch', () => {
    const tree = renderer.create(<UserSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
