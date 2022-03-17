/* eslint-disable testing-library/prefer-find-by */
import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as timetableAPI from '../../../api/TimetableAPI';

import Pairing from '../Pairing';

jest.mock('../../../api/TimetableAPI');

describe('Render Pairing page', () => {
  test('should display course card test', async () => {
    timetableAPI.getCourses.mockImplementation(() =>
      Promise.resolve([
        {
          courseId: 1110,
          name: 'SOFTENG 701',
          semester: '2022 sem 1',
          studentCount: 10,
          buddyCount: 4,
          updatedTime: 1647383521,
        },
        {
          courseId: 1111,
          name: 'SOFTENG 754',
          semester: '2022 sem 1',
          studentCount: 11,
          buddyCount: 5,
          updatedTime: 1647383522,
        },
      ]),
    );

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      render(<Pairing />);
    });

    await waitFor(() => expect(screen.getByText('SOFTENG 701')).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText('SOFTENG 754')).toBeInTheDocument());
  });

  test('should show increased selected course', async () => {
    timetableAPI.getCourses.mockImplementation(() =>
      Promise.resolve([
        {
          courseId: 1110,
          name: 'SOFTENG 701',
          semester: '2022 sem 1',
          studentCount: 10,
          buddyCount: 4,
          updatedTime: 1647383521,
        },
        {
          courseId: 1111,
          name: 'SOFTENG 754',
          semester: '2022 sem 1',
          studentCount: 11,
          buddyCount: 5,
          updatedTime: 1647383522,
        },
        {
          courseId: 1112,
          name: 'SOFTENG 756',
          semester: '2022 sem 1',
          studentCount: 11,
          buddyCount: 5,
          updatedTime: 1647383522,
        },
      ]),
    );

    await act(async () => {
      render(<Pairing />);

      let button1;
      let button2;

      await waitFor(() => {
        button1 = screen.getByText('SOFTENG 701').closest('button');
      });
      await waitFor(() => {
        button2 = screen.getByText('SOFTENG 756').closest('button');
      });

      fireEvent.click(button1);
      fireEvent.click(button2);
    });

    await waitFor(() => expect(screen.getByText('2 Courses Selected')));
  });
});
