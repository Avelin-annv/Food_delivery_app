import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { userContext } from "./userContext";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
const AppLayout = () => {
  const [loggedInUser, setLoggedInUser] = useState("Avelin");

  return (
    <>
      <Provider store={appStore}>
        <userContext.Provider
          value={{ loggedInUser: loggedInUser, setLoggedInUser }}
        >
          <Header />
          <Outlet />
        </userContext.Provider>
      </Provider>
    </>
  );
};

export default AppLayout;
