import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/bootstrap.css';
import './js/bootstrap_bundle.js';


import './index.css';

//import reportWebVitals from './reportWebVitals';

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();


//import React from 'react';
//import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


    document.addEventListener("DOMContentLoaded", function () {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.slide-right').forEach(el => {
        observer.observe(el);
      });
    });