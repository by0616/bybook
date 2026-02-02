import React, { use, useEffect } from 'react';
import NavBar from './modules/NavBar';

import { Outlet } from 'react-router-dom';

import './App.css';
import '../utilities.css';

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
        <div className = "App-container">
          <Outlet />
        </div>
    </>
  );
}

export default App;