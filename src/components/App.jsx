import React, { useEffect } from 'react';
import NavBar from './modules/NavBar';

import { Outlet, useLocation } from 'react-router-dom';

import './App.css';
import '../utilities.css';
import Footer from './modules/Footer';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

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
