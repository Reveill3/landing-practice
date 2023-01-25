import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Styles from './pages/Styles';

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/styles',
        element: <Styles />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
