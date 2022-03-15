import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Carousel from '../Carousel';

describe('Carousel', () => {
  const mockData = [
    {
      id: 1,
      title: 'page-one-title',
      description: 'page-one-description',
    },
    {
      id: 2,
      title: 'page-two-title',
      description: 'page-two-description',
    },
  ];

  it('renders two circle buttons in total', async () => {
    render(<Carousel data={mockData} />);
    expect(await screen.findAllByRole('button')).toHaveLength(2);
  });

  it('initially renders the first page content, but not the subsequent pages', () => {
    render(<Carousel data={mockData} />);
    expect(screen.getByText('page-one-title')).toBeInTheDocument();
    expect(screen.getByText('page-one-description')).toBeInTheDocument();
    expect(screen.queryByText('page-two-title')).not.toBeInTheDocument();
    expect(screen.queryByText('page-two-description')).not.toBeInTheDocument();
  });

  it('changes pages correct when the second page button is pressed', async () => {
    render(<Carousel data={mockData} />);
    const pageButtons = await screen.findAllByRole('button');

    // This statement simulates a button click event on the second page button.
    fireEvent(
      pageButtons[1],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(screen.queryByText('page-one-title')).not.toBeInTheDocument();
    expect(screen.queryByText('page-one-description')).not.toBeInTheDocument();
    expect(screen.getByText('page-two-title')).toBeInTheDocument();
    expect(screen.getByText('page-two-description')).toBeInTheDocument();
  });

  it('produces the correct initial snapshot', () => {
    const tree = renderer.create(<Carousel data={mockData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
