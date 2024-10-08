import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <HashRouter>
        <App />
      </HashRouter>
    );
}
