import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { COOKING_IMG_URL } from "../utils/constants";
import CategoryAccordion from "./CategoryAccordion";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartList = cartItems.slice(1).map((item) => {
    return item[Object.keys(item)[0]];
  });

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="text-center font-bold text-2xl m-4">Your cart</h1>

      {cartItems?.length === 1 ? (
        <div className="text-center ">
          <img className="w-40 m-auto" src={COOKING_IMG_URL}></img>
          <h1>Your cart is Empty!</h1>
          <h2 className="text-gray-400 text-sm">
            You can go to home page to view more restaurants.
          </h2>
        </div>
      ) : (
        <div className="w-6/12 mx-auto my-8 p-4 shadow-lg">
          <button
            className="p-3 m-3 rounded-xl bg-black text-yellow-50"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
          <CategoryAccordion dataList={cartList} />
        </div>
      )}
    </div>
  );
};
export default CartPage;
