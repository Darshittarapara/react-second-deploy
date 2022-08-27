//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Header from './Allcomponet/Header';

import Navbar from './Allcomponet/Navbar';
import Footer from './Allcomponet/Footer';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;