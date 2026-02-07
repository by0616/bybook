import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import Home from './components/pages/Home';
import AboutMe from './components/pages/AboutMe';
import Blog from './components/pages/Blog';
import Gallery from './components/pages/Gallery';
import NotFound from './components/pages/NotFound';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme/" element={<AboutMe />} />
      <Route path="/blog/" element={<Blog />} />
      <Route path="/gallery/" element={<Gallery />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
