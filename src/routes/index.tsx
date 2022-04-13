import Home from "../pages/home";
import AskSuperHost from "../pages/ask_super_host";

export interface ElementRoute {
  path: string;
  element: JSX.Element;
}

export const elementRoutes: ElementRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/askasuperhost",
    element: <AskSuperHost />,
  },
];
