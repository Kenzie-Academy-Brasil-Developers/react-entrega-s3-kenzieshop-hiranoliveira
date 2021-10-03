import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import "./style.css";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price } = product;

  return (
    <div className="prod">
      <h3>Produto: {name}</h3>
      <h3>Preço: R${price}</h3>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar no carrinho
        </button>
      )}
    </div>
  );
};

export default Product;
