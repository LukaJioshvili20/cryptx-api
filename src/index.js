import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Router
import { BrowserRouter } from 'react-router-dom';

// Components
import { TheHeader } from "./components/layout/TheHeader"

// Styles
import { Container } from "./components/styles/Container.styled"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <TheHeader/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
