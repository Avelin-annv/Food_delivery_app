import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../components/Home";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import MOCK_DATA from "../__mocks__/RestaurantsData.json";
global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) });
});
const getSearchInput = () =>
  screen.getByPlaceholderText("Search for restaurants and foods");
async function renderHome() {
  return await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Home />
        </Provider>
      </BrowserRouter>
    )
  );
}
describe("Test Home page", () => {
  test("home page is rendered properly", async () => {
    await renderHome();
    const restCards = await screen.findAllByTestId("res-card");
    expect(restCards).toHaveLength(20);
  });
  test("Search bar functionalities", async () => {
    await renderHome();
    const searchInput = getSearchInput();
    expect(searchInput).toBeInTheDocument;
    const restCards = await screen.findAllByTestId("res-card");
    expect(restCards).toHaveLength(20);
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    const searchBtn = await screen.findByTestId("search-btn");
    fireEvent.click(searchBtn);
    expect(await screen.findAllByTestId("res-card")).toHaveLength(1);
    fireEvent.change(searchInput, { target: { value: "" } });
  });
  test("Search works on Enter key press", async () => {
    await renderHome();
    const searchInput = getSearchInput();
    fireEvent.change(searchInput, { target: { value: "cafe" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: 13 });
  });
  test("Search not found case", async () => {
    await renderHome();
    const searchInput = getSearchInput();
    fireEvent.change(searchInput, { target: { value: "xyzsw" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: 13 });
  });
});
