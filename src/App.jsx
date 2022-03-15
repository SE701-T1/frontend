import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import theme from './components/Theme';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
