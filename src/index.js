//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';

//Routes
import Routes from './routes';

render(
  <Router basename={process.env.PUBLIC_URL}>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
