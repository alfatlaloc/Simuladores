import Tabla from "./Components/Tabla";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/Footer";
import Simulador from "./Components/Simulador";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/tabla">
            <Tabla />
          </Route>

          <Route path="/simulador">
            <Simulador />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
