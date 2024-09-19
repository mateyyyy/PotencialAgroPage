import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from '../App.jsx';
import Acta from "../pages/Acta/index.jsx";
import Alcance from "../pages/Alcance/index.jsx";
import Requisitos from "../pages/Requisitos/index.jsx";
import EDT from '../pages/EDT';
import Trazabilidad from "../pages/Trazabilidad/index.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/acta",
    element: <Acta/>,
  },

  {
    path: "/alcance",
    element: <Alcance/>,
  },

  {
    path: "/requisitos",
    element: <Requisitos/>,
  },

  {
    path: "/edt",
    element: <EDT/>,
  },

  {
    path: "/trazabilidad",
    element: <Trazabilidad/>,
  },

]);

export { router };
