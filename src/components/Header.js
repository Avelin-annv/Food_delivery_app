import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "../userContext";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="flex justify-between border bg-slate-50 shadow-2xl">
      <img
        className="w-20 rounded-2xl m-4"
        alt=" App logo"
        src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x300&vertical=center"
      ></img>
      <ul className=" flex m-4 p-4">
        <li className="m-2.5">
          {" "}
          <Link to={"/grocery"}>Grocery</Link>
        </li>
        <li className="m-2.5">{`online status: ${isOnline ? "✅" : "❌"}`}</li>
        <li className="m-2.5">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="m-2.5">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="m-2.5">
          {" "}
          <Link to={"/contact"}>Contact us</Link>
        </li>
        {/* <li className="m-2.5">User:{loggedInUser}</li> */}
        <li className="m-2.5">
          <Link to="/cart">
            🛒
            <label data-testid="cart-items-no">{`Cart (${cartItems.length})`}</label>
          </Link>
        </li>
        <li className="m-2.5">
          {" "}
          <button
            data-testid="login-btn"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Header;
