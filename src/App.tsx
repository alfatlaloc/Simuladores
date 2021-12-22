import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Footer from "./Components/Common/footer/Footer";
import Simulador from "./Components/Empresas/AgregarEmpresas";
import Glosario from "./Components/HomeFiles/glosario";
import "./Styles/Navbar.sass";
import "./Styles/main.sass";
import ModificarEmpresa from "./Components/Empresas/ModificarEmpresa";
import Error404 from "./Components/Common/Error404";
import UnaEmpresa from "./Components/Simulador/UnaEmpresa";
import ModificarProducto from "./Components/Productos/ModificarProducto";
import VariosProductos from "./Components/VariosProductos/VariosProductos";
import Metodologia from "./Components/HomeFiles/Metodologia";
import Practica from "./Components/HomeFiles/Practica";
import Referencias from "./Components/HomeFiles/referencias";
import PuntoEquilibrio from "./Components/HomeFiles/puntoEquilibrio";
import PuntoEquilibrioOperacional from "./Components/HomeFiles/indicePuntoEquilibrio/1PuntoDeEquilibrioOperacional";
import PuntoEquilibrioOperacional1Producto from "./Components/HomeFiles/indicePuntoEquilibrio/1PuntoDeEquilibrioOperacional1Prod";
import PuntoEquilibrioOperacionalMultiplesProductos from "./Components/HomeFiles/indicePuntoEquilibrio/1PuntoDeEquilibrioOperacionalMultProd";
import Requerimientos from "./Components/Requerimientos/Requirimientos";
import Manual from "./Components/Manual/Manual";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <section className="generalBody">
          <Switch>
            <Route path="/simulador" component={Simulador} />

            <Route path="/glosario" component={Glosario} />
            <Route path="/practica" component={Practica} />
            <Route path="/teoriaPuntoEq" component={PuntoEquilibrio} />
            <Route
              path="/teoriaPuntoEq-1"
              component={PuntoEquilibrioOperacional}
            />
            <Route
              path="/teoriaPuntoEq-1-1"
              component={PuntoEquilibrioOperacional1Producto}
            />
            <Route
              path="/teoriaPuntoEq-1-2"
              component={PuntoEquilibrioOperacionalMultiplesProductos}
            />
            <Route path="/referencias" component={Referencias} />
            <Route path="/manual" component={Manual} />

            <Route path="/simulador" component={Simulador} />
            <Route path="/variosproductos" component={VariosProductos} />
            <Route path="/unaempresa" component={UnaEmpresa} />
            <Route path="/metodologia" component={Metodologia} />

            <Route
              path="/empresa/:_id/producto/:_pr"
              component={ModificarProducto}
            />

            <Route path="/empresa/:_id" component={ModificarEmpresa} />
            <Route path="/Requerimientos" component={Requerimientos} />
            <Route path="/error404" component={Error404} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
