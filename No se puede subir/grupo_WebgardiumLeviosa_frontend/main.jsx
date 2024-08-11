// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line no-unused-vars
import Routing from './src/common/Routing.jsx';
// eslint-disable-next-line no-unused-vars
import AuthProvider from './src/auth/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
  </AuthProvider>,
);
