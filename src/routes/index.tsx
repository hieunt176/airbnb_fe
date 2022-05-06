import Home from "../pages/home";
import AskSuperHost from "../pages/ask_super_host";
import HostYourHome from "../pages/host/homes";
import Experiences from "../pages/host/experiences";
import Help from "../pages/help";

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
  {
    path: "/host/homes",
    element: <HostYourHome />,
  },
  {
    path: "/host/experiences",
    element: <Experiences />,
  },
  {
    path: "/help",
    element: <Help />,
  },
];
