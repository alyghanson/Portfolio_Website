import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <BrowserRouter basename='/Portfolio_Website'>
        <App />
      </BrowserRouter>
    );
}
