import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: ''
  }
]);

function Routes() { return <RouterProvider router={router}/>; }

export default Routes;