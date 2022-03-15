import { createTheme } from '@mui/material';

/**
 * Theme is based on figma design shown here:
 * https://www.figma.com/file/s4xJvh3Q3mvYEKGAULzwbh/Class-Buddy-Match
 */
const theme = createTheme({
  palette: {
    primary: {
      light: '#DABCD4',
      main: '#C5D3E9',
      dark: '#8896AC',
    },
    secondary: {
      light: '#FFFCF3',
      main: '#F9F4E4',
    },
  },
});

export default theme;
