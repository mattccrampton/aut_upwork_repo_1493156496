import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './config';

import Cart from './components/cart';
//import HomepagePage from './pages/homepage/HomepagePage';
import Homepage from './scenes/Homepage/Homepage';

import './App.css';

/*
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Cart />
        </div>
      </div>
    );
  }
}
*/

const CART = () => (
  <div>
    <h2>CART</h2>
    <Cart />
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${match.url}/components`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


class App extends Component {
  render() {
    return (<Router>

      <div>
        {/*
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/CART">CART</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        </ul>
        <hr/>
        */}

        <Route exact path="/" component={Homepage}/>
        <Route path="/CART" component={CART}/>
        <Route path="/topics" component={Topics}/>
      </div>

    </Router>)
  }
}


export default App
