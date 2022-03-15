import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { ServiceWorkerProvider } from './context/serviceWorkerContext';

ReactDOM.render(
  <React.StrictMode>
    <ServiceWorkerProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ServiceWorkerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
