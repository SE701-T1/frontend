import React from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
import theme from './components/Theme';
import { AuthContextProvider } from './context/AuthContext';
import { SocketContextProvider } from './api/sockets/Sockets';
import { ChatContextProvider } from './context/ChatContext';

function App() {
  return (
    <SocketContextProvider>
      <AuthContextProvider>
        <ChatContextProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ThemeProvider>
        </ChatContextProvider>
      </AuthContextProvider>
    </SocketContextProvider>
  );
}

export default App;
