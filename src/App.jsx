import React from 'react';
import {ThemeProvider} from '@mui/material';
import {BrowserRouter} from 'react-router-dom';
import Routes from './pages/Routes';
import theme from './components/Theme';
import {AuthContextProvider} from './context/authContext';
import {SocketContext, SocketHandler} from "./api/sockets/Sockets";

function App() {
  return (
    <SocketContext.Provider value={SocketHandler}>
      <AuthContextProvider socket={SocketHandler}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </ThemeProvider>
      </AuthContextProvider>
    </SocketContext.Provider>
  );
}

export default App;
