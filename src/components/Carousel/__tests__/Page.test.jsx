import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Page from '../Page';

describe('Carousel Page', () => {
  /**
   * This tests whether the document has rendered the required tests to the screen.
   */
  it('is correctly rendered to the screen', () => {
    render(<Page title="title_content" description="description_content" />);
    expect(screen.getByText('title_content')).toBeInTheDocument();
    expect(screen.getByText('description_content')).toBeInTheDocument();
  });

  /**
   * This test is similar to the one above, but this also checks if the classnames of the
   * component (styling) is as expected.
   */
  it('produces the correct DOM tree with rendered', () => {
    const tree = renderer
      .create(<Page title="title_content" description="description_content" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
