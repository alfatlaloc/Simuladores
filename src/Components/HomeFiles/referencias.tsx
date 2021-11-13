import { useHistory } from "react-router";

const Referencias = () => {
  const history = useHistory();

  return (
    <section className="textosEncuadre">
      <h1>Referencias</h1>
      <ul>
          <li>Referencia 1</li>
          <li>Referencia 2</li>
          <li>Referencia 3</li>
      </ul>
    </section>
  );
};

export default Referencias;