import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

interface props {
  link: string;
}

const BotonSiguiente: React.FC<props> = ({ link }) => {
  const history = useHistory();

  return (
    <Button
    className="m-1 btnFlotanteRigth"
      variant="primary"
      onClick={() => {
        history.push(link);
      }}
    >
      <BsArrowRightCircleFill size="2em" />
    </Button>
  );
};

export default BotonSiguiente;
