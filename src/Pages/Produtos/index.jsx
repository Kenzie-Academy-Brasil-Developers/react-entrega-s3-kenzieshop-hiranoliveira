import { useHistory } from "react-router";
import Products from "../../components/Products";

const Produtos = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <div>
      <h2>Produtos</h2>
      <Products />
      <button onClick={() => handleNavigation("/carrinho")}>
        Ver meu carrinho
      </button>
    </div>
  );
};

export default Produtos;
