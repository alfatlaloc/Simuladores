import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {AiOutlineHome} from "react-icons/ai"

const BotonHome = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 btnFlotante"
      variant="primary"
      onClick={() => {
        history.push("/home");
      }}
    >
      <AiOutlineHome size={"1.75em"} />
    </Button>
  );
};

export default BotonHome;