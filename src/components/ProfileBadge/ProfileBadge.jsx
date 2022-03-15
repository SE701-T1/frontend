import React from 'react';
import { Avatar, Badge, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const Active = styled(Badge, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  '& .MuiBadge-badge': {
    height: '10px',
    width: '10px',
    borderRadius: '5px',
    backgroundColor: active ? '#44b700' : '#979797',
    color: active ? '#44b700' : '#979797',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

function ProfileBadge({ active, name, size, src }) {
  return (
    <Container sx={{ height: size, width: size }} disableGutters>
      <Active
        active={active}
        data-testid={active ? 'active' : 'offline'}
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot">
        <Avatar data-testid={name} alt={name} src={src} sx={{ height: size, width: size }} />
      </Active>
    </Container>
  );
}

ProfileBadge.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  src: PropTypes.string,
};

ProfileBadge.defaultProps = {
  active: false,
  size: 52,
  src: '',
};

export default ProfileBadge;
