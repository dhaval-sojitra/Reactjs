import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="create react app" command="npx create-react-app app-name"/>
    <App name="Install react" command="npm install react "/>
  </React.StrictMode>
);

reportWebVitals();
