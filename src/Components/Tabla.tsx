import React from "react";

interface Props{
  num:Array<Number>
}

const Tablita : React.FC<Props> = ({num}) => {
  return (
    <div>
      <p>Valor inicial {num}</p>
    </div>
  );
};

const Tabla = () => {
  return (
    <div>
      <p>Tablitas</p>
      <Tablita num={[4,3,2]} />
    </div>
  );
};

export default Tabla;
