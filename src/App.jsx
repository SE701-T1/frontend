import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import theme from './components/Theme';
import { AuthContextProvider } from './context/authContext';
import { SocketContext, SocketContextProvider } from './api/sockets/Sockets';

function App() {
  return (
    <SocketContextProvider>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AuthContextProvider>
    </SocketContextProvider>
  );
}

export default App;
