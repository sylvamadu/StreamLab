
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import img from '../src/Components/img/aron.jpg';




function App() {

  return(
    <div className="app" style={{backgroundImage: `url(${img})`, width: '100vw',height:'100vh', margin:0,overflowX:'hidden'}}>
      <Header />
      <Main />
      <div className="menu-bar">
          <i className="fa fa-bars"></i>
      </div>
  </div>
  )
}

export default App;
