import './index.css';
import App from './components/App.jsx';
import React from 'react';
import { AuthProvider } from 'react-auth-kit';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

document.title = 'OnTrack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider authType="cookie" authName="_auth" cookieSecure={false}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
