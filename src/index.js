import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
     <h1 className="title">Cinephile's Digger</h1>
      <App />
    </div>
  </React.StrictMode>
);
