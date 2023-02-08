import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/styles.scss';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="https://chefjoseph.github.io/PortfolioWebsite/">
    <App />
  </Router>
);
