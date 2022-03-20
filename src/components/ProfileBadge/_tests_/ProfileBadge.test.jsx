import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ProfileBage from '../ProfileBadge';

describe('Render ProfileBadge', () => {
  it('Render Active ProfileBadge', () => {
    render(<ProfileBage active name="Bob" />);
    expect(screen.getByTestId('active'));
  });
  it('Render Offline ProfileBadge', () => {
    render(<ProfileBage active={false} name="Bob" />);
    expect(screen.getByTestId('offline'));
    expect(screen.getByTestId('Bob'));
  });

  // snapshot test
  it('produces correct snapshot of the ProfileBadge', () => {
    const tree = renderer.create(<ProfileBage active name="Bob" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
