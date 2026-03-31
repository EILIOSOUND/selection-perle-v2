import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Category from "../pages/category/page";
import ShoppingPage from "../pages/shopping/page";
import ShoppingLanding from "../pages/shopping/landing";
import MentionsLegales from "../pages/legal/mentions-legales";
import CGU from "../pages/legal/cgu";
import PolitiqueConfidentialite from "../pages/legal/politique-confidentialite";

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
    path: "/shopping",
    element: <ShoppingLanding />,
  },
  {
    path: "/shopping/:gender",
    element: <ShoppingPage />,
  },
  {
    path: "/mentions-legales",
    element: <MentionsLegales />,
  },
  {
    path: "/cgu",
    element: <CGU />,
  },
  {
    path: "/politique-de-confidentialite",
    element: <PolitiqueConfidentialite />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;