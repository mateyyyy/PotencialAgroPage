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
import DiccionarioEDT from "../pages/DiccionarioEDT";
import MatrizRiesgo from "../pages/MatrizRiesgo/index.jsx";
import Adquisiciones from "../pages/Adquisiciones/index.jsx";
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

  
  {
    path: "/diccionario",
    element: <DiccionarioEDT/>,
  },

  {
    path: "/matrizRiesgo",
    element: <MatrizRiesgo/>,
  },

  {
    path: "/adquisiciones",
    element: <Adquisiciones/>,
  },

]);

export { router };
