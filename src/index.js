import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.tsx';
// import './index.css';
import { GlobalStyle } from './components/Global.style.ts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
