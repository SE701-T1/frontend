import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

/**
 * Here is an Example component that follows our component conventions
 * @returns
 */
function Example({ text }) {
  return <Typography>{text}</Typography>;
}

Example.propTypes = {
  text: PropTypes.string,
};

Example.defaultProps = {
  text: 'This is an example component.',
};

export default Example;
