import React from 'react';
import { render, screen } from '@testing-library/react';
import BuddyCard from '../BuddyCard';

describe('BuddyCard render with no props', () => {
  test('should display default text', () => {
    render(<BuddyCard />);

    expect(screen.getByText(/You dont have any buddies in this course yet/i)).toBeInTheDocument();
  });
  test('should display find buddy button', () => {
    render(<BuddyCard />);

    expect(screen.getByRole('button', { name: /Find a buddy/i })).toBeInTheDocument();
  });
});

describe('BuddyCard render with props', () => {
  test('should display buddy name', () => {
    render(<BuddyCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/Example Name/i)).toBeInTheDocument();
  });
  test('should display course name', () => {
    render(<BuddyCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/SE751/i)).toBeInTheDocument();
  });
});
