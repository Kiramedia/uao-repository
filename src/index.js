//Dependencies
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';

//Routes
import Routes from './routes';

window.$sessionState = false;

render(
  <Router>
    <Routes/>
  </Router>,
  document.getElementById('root')
);
