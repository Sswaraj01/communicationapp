import ReactDOM from 'react-dom/client';
import React from 'react';
import Main from './Main'; 
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.js'; // for Bootstrap Javascript component
import 'font-awesome/css/font-awesome.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />); // calling Main Component