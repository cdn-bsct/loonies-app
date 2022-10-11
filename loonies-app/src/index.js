import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react'
import './index.css';
import App from './Pages/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Routes> */}
      <App />
    {/* </Routes> */}
  </React.StrictMode>
);

