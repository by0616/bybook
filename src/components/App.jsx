import React, { useEffect } from 'react';
import NavBar from './modules/NavBar';

import { Outlet } from 'react-router-dom';

import './App.css';
import '../utilities.css';
import Footer from './modules/Footer';

const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="App-root">
      <NavBar />
      <div className="App-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;