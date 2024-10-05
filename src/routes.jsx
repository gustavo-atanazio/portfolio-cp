import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <Home/> },
      { path: '/projetos', element: <Projects/> },
      { path: '/contato', element: <Contact/> },
      { path: '*', element: <NotFound/> }
    ]
  }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;