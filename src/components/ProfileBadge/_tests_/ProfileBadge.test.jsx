import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfileBage from '../ProfileBadge';

describe('Render Active ProfileBadge', () => {
  test('ProfileBadge test', () => {
    render(<ProfileBage active name="Bob" />);
    expect(screen.getByTestId('active'));
  });
});

describe('Render Offline ProfileBadge', () => {
  test('ProfileBadge test', () => {
    render(<ProfileBage active={false} name="Bob" />);
    expect(screen.getByTestId('offline'));
    expect(screen.getByTestId('Bob'));
  });
});
