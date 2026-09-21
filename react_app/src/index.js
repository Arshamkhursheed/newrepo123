import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import bbd from './bbd.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <bbd />
  </React.StrictMode>
);



