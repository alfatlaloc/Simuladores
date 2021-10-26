import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const BotonRegresar = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 buttonPrimary btnFlotante"
      onClick={() => {
        history.goBack();
      }}
    >
      Volver
    </Button>
  );
};

export default BotonRegresar;
