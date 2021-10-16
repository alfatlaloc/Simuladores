import { useHistory } from "react-router";

const Instrucciones = () => {

    const history = useHistory();

  return (
    <div className="instrucciones">
      <h1>Instrucciones</h1>
      <p> TEXTO TEXTO TEXTO TEXTO TEXTO</p>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        Regresar
      </button>
    </div>
  );

  
};

export default Instrucciones;