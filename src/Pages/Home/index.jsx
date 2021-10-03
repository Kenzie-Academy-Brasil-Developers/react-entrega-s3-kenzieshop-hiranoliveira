import { useHistory } from "react-router";
import "./style.css";

const Home = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <div>
      <h1>Bem vindo à Papelaria KenzieShop</h1>
      <div>
        <button onClick={() => handleNavigation("/products")}>Produtos</button>
        <button onClick={() => handleNavigation("/carrinho")}>Carrinho</button>
      </div>
    </div>
  );
};

export default Home;
