import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pairing from '../Pairing';

describe('Render Pairing page', () => {
  test('should display pairing test', () => {
    render(<Pairing />);
  });
});
