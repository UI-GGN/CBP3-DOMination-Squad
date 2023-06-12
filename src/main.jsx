import './index.css';
import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';

document.title = 'OnTrack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
