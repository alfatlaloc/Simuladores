import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

import { BiArrowBack } from "react-icons/bi";

const BotonRegresar = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 buttonPrimary btnFlotante"
      onClick={() => {
        history.goBack();
      }}
    >
      <BiArrowBack />
    </Button>
  );
};

export default BotonRegresar;
