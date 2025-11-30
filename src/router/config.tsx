import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Category from "../pages/category/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/category/:slug",
    element: <Category />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;