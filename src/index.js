import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Styles
import { Container } from "./components/styles/Container.styled"
import './index.css';
// Router
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);

reportWebVitals();