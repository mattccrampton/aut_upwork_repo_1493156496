import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  //Link
} from 'react-router-dom'

import './config';

//import Cart from './components/cart';
import Homepage from './scenes/Homepage/Homepage';
import BookDetail from './scenes/BookDetail/BookDetail';

import './App.css';


class App extends Component {
  render() {
    return (<Router>

      <div>
        <Route exact path="/" component={Homepage}/>
        <Route path="/book/:id" component={BookDetail}/>
      </div>

    </Router>)
  }
}


export default App
