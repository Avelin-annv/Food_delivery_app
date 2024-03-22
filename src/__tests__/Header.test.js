import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import appStore from "../store/appStore";
import { userContext } from "../userContext";
const renderHeader = () =>
  render(
    <BrowserRouter>
      <userContext.Provider value={{ loggedInUser: "loggedInUser" }}>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </userContext.Provider>
    </BrowserRouter>
  );
test("Renders Header component", () => {
  renderHeader();
  expect(screen.getByTestId("login-btn")).toBeInTheDocument;
  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  expect(screen.getByTestId("cart-items-no")).toHaveTextContent("Cart (0)");
});
test("Login and logout functionality", () => {
  renderHeader();
  const loginBtn = screen.getByTestId("login-btn");
  expect(loginBtn).toHaveTextContent("Login");
  fireEvent.click(loginBtn);
  expect(loginBtn).toHaveTextContent("Logout");
});
