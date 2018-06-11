import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <ul className = 'header'>
        <li><Link to='/'>李白</Link></li>
        <li ><Link to='/dufu'>杜甫</Link></li>
        <li><Link to='/lsy'>李商隐</Link></li>
      </ul>

    </div>);
  }
}

export default App;
