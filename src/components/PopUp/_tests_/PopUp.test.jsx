import React from 'react';
import { render, screen } from '@testing-library/react';
import PopUp from '../PopUp';

describe('Render PopUp component', () => {
  test('PopUp test', () => {
    render(<PopUp name="Test" buddyNumber="1" open={true} size={250}/>);
    expect(screen.getByTestId('popup'));
  });
});
