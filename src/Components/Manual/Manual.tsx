import BotonHome from "../Common/BotonHome";
import Indice from "./Indice";
import '../../Styles/ManualUsuario.sass';
import homeImg from '../../img/ManualUsuario/home.png'
const Manual = () => {
  return (
    <div className="pagina manual">
      <h2>Manual de usuario</h2>
      <BotonHome />

      <Indice />
    </div>
  );
};

export default Manual;
