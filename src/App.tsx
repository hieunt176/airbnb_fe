import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { elementRoutes } from "../src/routes";
import { ElementRoute } from "../src/routes";

function App() {
  const renderComponentRoutes = (componentRoutes: ElementRoute[]) => {
    return componentRoutes.map((componentRoute: ElementRoute, index: number) => {
      const { path, element } = componentRoute;
     
      return <Route key={index} path={path} element={element} />;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        {renderComponentRoutes(elementRoutes)}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
