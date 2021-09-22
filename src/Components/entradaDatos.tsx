import { useForm } from "./customHooks/useForm";
interface fields{

}

const entradaDatos: React.FC = () => {

  const {form,handleChange} = useForm("hello");
  return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Name:
        <input type="text" name="two" />
      </label>
    </form>
  );
};

export default entradaDatos;
