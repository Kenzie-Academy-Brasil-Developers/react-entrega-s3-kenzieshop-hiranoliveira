import { useSelector } from "react-redux";
import Product from "../Product";
import "./style.css";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div className="prodCart">
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </div>
  );
};

export default Cart;
