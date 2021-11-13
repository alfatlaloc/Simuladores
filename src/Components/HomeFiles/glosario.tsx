import { useHistory } from "react-router";

const Glosario = () => {
  const history = useHistory();

  return (
    <section className="textosEncuadre">
      <h1>Glosario</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus condimentum mattis sapien in fringilla. Sed placerat ut arcu nec bibendum. Nulla elementum consequat tellus, sit amet consequat eros varius in. Vestibulum pellentesque lacus ut enim condimentum, in cursus felis pulvinar. Fusce iaculis interdum nulla non tempor. Integer sed risus eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque cursus, dolor at lacinia imperdiet, nibh felis vulputate leo, eu posuere eros neque at felis. Donec ullamcorper sit amet leo in pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sed lacus odio.

      </p>
    </section>
  );
};

export default Glosario;