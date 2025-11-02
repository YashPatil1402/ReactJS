import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar'; // optional if you want navbar everywhere
import Param from './components/param';
import Test1 from './components/test1';
import Test2 from './components/test2';
import NotFound from './components/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
    children:[
      {path:'test1',
        element: <Test1/>,
      },
      {
        path:'test2',
        element:<Test2/>,
      }
    ]
  },
  {
     path:"/student/:id",
     element: (
      <>
        <Navbar />
        <Param/>
      </>
    ),
  },
  {
    path:'*',
    element:<NotFound/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
