import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/footer/Footer";
import Simulador from "./Components/Empresas/AgregarEmpresas";
import Instrucciones from "./Components/Instrucciones";
import "./Styles/Navbar.sass";
import "./Styles/main.sass";
import ModificarEmpresa from "./Components/Empresas/ModificarEmpresa";
import Error404 from "./Components/Common/Error404";
import UnaEmpresa from "./Components/Simulador/UnaEmpresa";
import ModificarProducto from "./Components/Productos/ModificarProducto";
import VariosProductos from "./Components/VariosProductos/VariosProductos";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/simulador" component={Simulador} />

          <Route path="/instrucciones" component={Instrucciones} />

          <Route path="/simulador" component={Simulador} />
          <Route path="/variosproductos" component={VariosProductos} />
          <Route path="/unaempresa" component={UnaEmpresa} />

          <Route
            path="/empresa/:_id/producto/:_pr"
            component={ModificarProducto}
          />

          <Route path="/empresa/:_id" component={ModificarEmpresa} />

          <Route path="/error404" component={Error404} />
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
