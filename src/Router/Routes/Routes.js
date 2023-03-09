import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import LogIn from "../../Pages/LogIn/LogIn";
import Registration from "../../Pages/Registration/Registration";
import NotFound from "../../Pages/NotFound/NotFound";
import DashboardLayout from '../../layouts/DashboardLayout';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Cart from '../../Pages/Home/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {path: "/", element: <Home />},
      {path: "/products", element: <Products />},
      {path: "/about", element: <About />},
      {path: "/contact", element: <Contact />},
      {path: "/login", element: <LogIn />},
      {path: "/registration", element: <Registration />},
      {path: "/cart", element: <Cart />},
      {path: "*", element: <NotFound />}
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {path: "/admin", element: <Dashboard />},
    ]
  }
]);

export default router;

