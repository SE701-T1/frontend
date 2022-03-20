import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import BuddyCard from '../BuddyCard';

describe('BuddyCard render with no props', () => {
  it('should display default text', () => {
    render(<BuddyCard />);

    expect(screen.getByText(/You dont have any buddies in this course yet/i)).toBeInTheDocument();
  });
  it('should display find buddy button', () => {
    render(<BuddyCard />);

    expect(screen.getByRole('button', { name: /Find a buddy/i })).toBeInTheDocument();
  });
});

describe('BuddyCard render with props', () => {
  it('should display buddy name', () => {
    render(<BuddyCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/Example Name/i)).toBeInTheDocument();
  });
  it('should display course name', () => {
    render(<BuddyCard buddyName="Example Name" courseName="SE751" />);

    expect(screen.getByText(/SE751/i)).toBeInTheDocument();
  });
});

it('produces correct snapshot of the BuddyCard', () => {
  const tree = renderer.create(<BuddyCard buddyName="Example Name" courseName="SE751" />).toJSON();
  expect(tree).toMatchSnapshot();
});
