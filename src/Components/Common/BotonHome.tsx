import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import {SiHomebridge} from "react-icons/si"

const BotonHome = () => {
  const history = useHistory();

  return (
    <Button
      className="m-1 btnFlotante btnBkHome"
      variant="primary"
      onClick={() => {
        history.push("/home");
      }}
    >
      <SiHomebridge size={"1.75em"} />
    </Button>
  );
};

export default BotonHome;