import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App.tsx';
import { BrowserRouter } from 'react-router-dom';
// import './index.css';
import { GlobalStyle } from './components/Global.style.ts';
import './components/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
