import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as timetableAPI from '../../../api/TimetableAPI';

import Pairing from '../Pairing';

jest.mock('../../../api/TimetableAPI');
timetableAPI.getCourses.mockImplementation(() =>
  Promise.resolve([
    {
      courseId: 1214,
      name: 'SOFTENG 701',
      semester: '2022 sem 1',
      studentCount: 10,
      buddyCount: 4,
      updatedTime: 1647383521,
    },
    {
      courseId: 1215,
      name: 'SOFTENG 754',
      semester: '2022 sem 1',
      studentCount: 11,
      buddyCount: 5,
      updatedTime: 1647383522,
    },
  ]),
);

describe('Render Pairing page', () => {
  test('should display pairing test', () => {
    render(<Pairing />);
    // expect(screen.getByTestId(1217)).toBeInTheDocument();
  });
});
