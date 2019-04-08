import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productlist from './components/Productlist';
import Default from './components/Default';
import Cart from './components/Cart/Cart';
import Details from './components/Details';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Productlist}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>        
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
