import { useEffect, useState } from "react";
import Empresa, { Producto } from "../Classes/Empresa";
import ProporcionProduccion from "./Proporciones/ProporcionProduccion";
import ProductoCheckBox from "./ProductoCheckBox";
import ContribucionMarginal from "./ContribucionMarginal";
import UtilidadDeseada from "./UtilidadDeseada";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface props {
  empresa: Empresa;
  productos: Producto[];
  setProductos: (prd: Producto[]) => void;
  proporciones: number[];
  setProporciones: (prop: number[]) => void;
  contMarginalPon: number[];
  setContMarginalPon: (num: number[]) => void;
  contMarginal: number[];
  setContMarginal: (num: number[]) => void;
  CMPP: number;
  setCMPP: (num: number) => void;
}

const Stepper: React.FC<props> = ({
  empresa,
  productos,
  setProductos,
  proporciones,
  setProporciones,
  contMarginalPon,
  setContMarginalPon,
  contMarginal,
  setContMarginal,
  CMPP,
  setCMPP,
}) => {
  const [step, setStep] = useState<number>(1);

  const prevStep = () => {
    if (step === 1) return;
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step > 3) return;
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
        if (productos.length > 1)
          return (
            <ProporcionProduccion
              productos={productos}
              empresa={empresa}
              proporciones={proporciones}
              setProporciones={setProporciones}
            />
          );
        else setStep(1);
        break;

      case 3:
        if (
          proporciones.reduce((prev, current) => {
            return prev + current;
          }) < 100
        )
          setStep(2);
        else
          return (
            <ContribucionMarginal
              productos={productos}
              costosFijos={empresa.costoFijoTotal()}
              proporciones={proporciones}
              contMarginalPon={contMarginalPon}
              setContMarginalPon={setContMarginalPon}
              contMarginal={contMarginal}
              setContMarginal={setContMarginal}
              CMPP={CMPP}
              setCMPP={setCMPP}
            />
          );
        break;

      case 4:
        return (
          <UtilidadDeseada
            productos={productos}
            proporciones={proporciones}
            CMPP={CMPP}
            empresa={empresa}
          />
        );

    }
  };

  useEffect(() => {
    setStep(1);
    setProductos([]);
    setProporciones([]);
  }, [empresa, setProductos, setProporciones]);

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
