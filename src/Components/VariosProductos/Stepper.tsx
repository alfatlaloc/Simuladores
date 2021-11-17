import { useEffect, useState } from "react";
import Empresa, { Producto } from "../Classes/Empresa";
import ProporcionProduccion from "./Proporciones/ProporcionProduccion";
import ProductoCheckBox from "./ProductoCheckBox";
import ContribucionMarginal from "./ContribucionMarginal";
import PuntoEquilibrioMezclado from "./PuntoEquilibrioMezclado";
import TablaResultados from "./TablaResultados";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface props {
  empresa: Empresa;
  productos: Producto[];
  setProductos: (prd: Producto[]) => void;
  proporciones: number[];
  setProporciones: (prop: number[]) => void;
}

const Stepper: React.FC<props> = ({
  empresa,
  productos,
  setProductos,
  proporciones,
  setProporciones,
}) => {
  const [step, setStep] = useState<number>(1);

  const prevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step > 4) return;
    setStep(step + 1);
  };

  const componentes = () => {
    switch (step) {
      case 1:
        return (
          <ProductoCheckBox
            empresa={empresa}
            productos={productos}
            setProductos={setProductos}
          />
        );

      case 2:
        return (
          <ProporcionProduccion
            productos={productos}
            empresa={empresa}
            proporciones={proporciones}
            setProporciones={setProporciones}
          />
        );

      case 3:
        return <ContribucionMarginal />;

      case 4:
        return <PuntoEquilibrioMezclado />;

      case 5:
        return <TablaResultados />;
    }
  };

  useEffect(() => {}, [empresa]);

  return (
    <div className="stepper">
      <ButtonGroup aria-label="Basic example">
        <Button
          className="m-1 steperButton"
          variant="primary"
          onClick={prevStep}
        >
          <BsArrowLeftCircleFill size="2em" />
        </Button>
        <Button
          className="m-1 steperButton"
          variant="primary"
          onClick={nextStep}
        >
          <BsArrowRightCircleFill size="2em" />
        </Button>
      </ButtonGroup>
      <br />
      Paso: {step}
      {componentes()}
    </div>
  );
};

export default Stepper;
