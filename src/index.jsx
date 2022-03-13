import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ServiceWorkerProvider } from './context/serviceWorkerContext';

ReactDOM.render(
  <React.StrictMode>
    <ServiceWorkerProvider>
      <App />
    </ServiceWorkerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
