import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {RiHomeHeartLine} from "react-icons/ri"

const BotonHome = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 buttonPrimary btnFlotante"
      onClick={() => {
        history.push("/home");
      }}
    >
      <RiHomeHeartLine size={"1.25em"} />
    </Button>
  );
};

export default BotonHome;