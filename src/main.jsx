import './index.css';
import App from './components/App.jsx';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { AuthProvider } from 'react-auth-kit';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
});

document.title = 'OnTrack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider authType="cookie" authName="_auth" cookieSecure={false}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
