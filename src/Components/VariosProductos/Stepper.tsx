import { useEffect, useState } from "react";
import Empresa, { Producto } from "../Classes/Empresa";
import Porcentajes from "./Porcentajes";
import ProductoCheckBox from "./ProductoCheckBox";

interface props {
  empresa: Empresa;
  productos: Producto[];
  setProductos: (prd: Producto[]) => void;
}

const Stepper: React.FC<props> = ({ empresa, productos, setProductos }) => {
  const [step, setStep] = useState<number>(0);
  
/** 
  const prevStep = () => {
    if (step === 0) return;
    setStep(step - 1);
  };
  */

  useEffect(() => {}, [empresa]);

  return (
    <div className="stepper">
      <ProductoCheckBox
        empresa={empresa}
        productos={productos}
        setProductos={setProductos}
      />

      <Porcentajes productos={productos} empresa={empresa} />
    </div>
  );
};

export default Stepper;
