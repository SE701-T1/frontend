import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import theme from './components/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
