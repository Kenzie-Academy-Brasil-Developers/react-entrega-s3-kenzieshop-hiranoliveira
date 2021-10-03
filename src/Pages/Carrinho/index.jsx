import { useHistory } from "react-router";
import Cart from "../../components/Cart";

const Carrinho = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <div>
      <h2>Meu carrinho:</h2>
      <Cart />
      <button onClick={() => handleNavigation("/products")}>
        Ver todos os produtos
      </button>
    </div>
  );
};

export default Carrinho;
