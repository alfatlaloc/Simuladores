import BotonHome from "../Common/BotonHome";
import Indice from "./Indice";
import "../../Styles/ManualUsuario.sass";
import { useEffect } from "react";

const Manual = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="pagina manual">
      <h2>Manual de usuario</h2>
      
      <h5>
        En este manual se muestran los componentes y su funcionamiento para que puedas usar la herramienta digital
        correctamente.
      </h5>
      <br/>
      <BotonHome />

      <Indice />
    </div>
  );
};

export default Manual;
