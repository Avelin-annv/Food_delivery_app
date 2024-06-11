import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnlineStatus();

  return (
    <div className="sm:flex justify-between border bg-slate-50 shadow-2xl px-4 font-semibold">
      <Link>
        <img
          className="w-20 rounded-2xl m-4"
          alt=" App logo"
          src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x300&vertical=center"
        />
      </Link>

      <ul className=" flex m-4 p-4 text-lg">
        <li className="m-2.5">
          <Link to={"/"}>Home</Link>
        </li>

        <li className="m-2.5">
          {" "}
          <Link to={"/contact"}>Contact us</Link>
        </li>
        <li className="m-2.5">
          <Link to="/cart">
            🛒
            <label data-testid="cart-items-no">{`Cart (${cartItems[0]?.totalCount})`}</label>
          </Link>
        </li>

        <li className="m-2.5">{`${isOnline ? "✅" : "❌"}`}</li>
      </ul>
    </div>
  );
};
export default Header;
