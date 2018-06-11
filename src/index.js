import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom';
import history from './history';
import './index.css';
import App from './App';
import Home from './Home';
import Dufu from './dufu';

ReactDOM.render(
  <Router history={history}>
    <div>
    <App/>
    <Route path='/' exact component= {Home}></Route>
    <Route path='/dufu' component= {Dufu}></Route>
    </div>
  </Router>
, document.getElementById('root'));
