import React from 'react';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <h1>My Photo Site</h1>
        <p>A simple gallery built with React + Vite</p>
      </header>
      <main>
        <Gallery />
      </main>
    </div>
  );
}
