import React from 'react';
// import ReactDOM from 'react-dom/client';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import App from './Pages/App/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
)

