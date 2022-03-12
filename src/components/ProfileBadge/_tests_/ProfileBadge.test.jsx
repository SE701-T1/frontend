import React from 'react';
import { render, screen } from '@testing-library/react';

import ProfileBage from '../ProfileBadge';

describe('Render Active ProfileBadge', () => {
  test('ProfileBadge test', () => {
    render(<ProfileBage active />);
    expect(screen.getByTestId('active'));
    expect(screen.getByTestId('avatar'));
  });
});

describe('Render Offline ProfileBadge', () => {
  test('ProfileBadge test', () => {
    render(<ProfileBage active={false} />);
    expect(screen.getByTestId('offline'));
    expect(screen.getByTestId('avatar'));
  });
});
