import "./App.css";
import Home from "./pages/home";
import Homes from "./pages/host/homes";
import "./App.css";
import AskSuperHost from "./pages/ask_super_host";

function App() {
  return (
    <div className="airbnb">
      {/* <Home /> */}
      <Homes />
      {/* <AskSuperHost /> */}
    </div>
  );
}

export default App;
