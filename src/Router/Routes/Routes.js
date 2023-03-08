import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Products from "../../Pages/Home/Products/Products";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import LogIn from "../../Pages/LogIn/LogIn";
import Registration from "../../Pages/Registration/Registration";
import NotFound from "../../Pages/NotFound/NotFound";

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
      {path: "*", element: <NotFound />}
    ],
  }
]);

export default router;

