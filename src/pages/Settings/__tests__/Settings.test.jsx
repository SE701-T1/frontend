import React from 'react';
import renderer from 'react-test-renderer';
import Settings from '../Settings';

describe('Render Login Button', () => {
  it('should display the Toggle text', () => {
    const tree = renderer.create(<Settings />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
