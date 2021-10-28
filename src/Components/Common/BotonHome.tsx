import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const BotonHome = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 buttonPrimary btnFlotante"
      onClick={() => {
        history.push("/home");
      }}
    >
      Volver
    </Button>
  );
};

export default BotonHome;