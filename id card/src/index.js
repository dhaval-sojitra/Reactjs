import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const data = require('./MCA.json')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      data.map(function (student) {
        return <App name={student.name} enrno={student.enrno} program={student.program} div={student.div} rollno={student.rollno}   />

      })
    }
  </React.StrictMode>
);

reportWebVitals();
