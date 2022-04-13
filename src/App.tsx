import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { elementRoutes } from "../src/routes";
import { ElementRoute } from "../src/routes";

function App() {
  const renderElementRoutes = (elementRoutes: ElementRoute[]) => {
    return elementRoutes.map((elementRoute: ElementRoute, index: number) => {
      const { path, element } = elementRoute;

      return <Route key={index} path={path} element={element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>{renderElementRoutes(elementRoutes)}</Routes>
    </BrowserRouter>
  );
}

export default App;
