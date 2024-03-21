import { useContext } from "react";
import { userContext } from "../userContext";

const Contact = () => {
  const { loggedInUser, setLoggedInUser } = useContext(userContext);
  return (
    <div>
      <h1 className="text-2xl">Contact us</h1>
      <label>Enter user</label>
      <input
        className="p-2 m-2 border border-blue-50"
        value={loggedInUser}
        onChange={(e) => setLoggedInUser(e.target.value)}
      ></input>
      <button className="m-2" bg-gray>
        Submit
      </button>
      {/* <textarea /> */}
    </div>
  );
};
export default Contact;
