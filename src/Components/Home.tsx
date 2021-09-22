import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <p>Info</p>
      <button
        onClick={() => {
          history.push("tabla");
        }}
      >
        Tablas
      </button>
    </div>
  );
};

export default Home;
