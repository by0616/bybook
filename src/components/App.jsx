import React, { use, useEffect } from 'react';
import NavBar from './modules/NavBar';

import { Outlet } from 'react-router-dom';

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
        <div className = >
          <Outlet />
        </div>
    </>
  );
}

export default App;