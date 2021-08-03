import React, { Component } from 'react';
import Header from './Header.js'
import Body from './Body.js'
import ListRender from './ListRender.js';
import Author from './Author.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Body/>
      <ListRender/>
      <Author/>
      <Footer/>
      </>
    );
  }
} 
export default App;