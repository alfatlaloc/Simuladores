import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

import { BsArrowLeftCircleFill } from "react-icons/bs";

const BotonRegresar = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 btnFlotante"
      variant="primary"
      onClick={() => {
        history.goBack();
      }}
    >
      <BsArrowLeftCircleFill size="2em" />
    </Button>
  );
};

export default BotonRegresar;
