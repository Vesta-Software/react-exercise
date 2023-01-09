import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import properties from "./data.json";
import CardGrid from "./CardGrid";

test("renders nav link", () => {
  render(<App />);
  const navElement = screen.getByText(/Properties/);
  expect(navElement).toBeInTheDocument();
});

test("Each element in the data.json is rendered", () => {
  render(<App />);
  properties.forEach((property) => {
    const curPropery = screen.getByText(property.name);
    expect(curPropery).toBeInTheDocument();
  });
});

test("onClick function works", () => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  jest.spyOn(console, "assert").mockImplementation(() => {});

  render(<CardGrid />);

  const card1 = screen.getByTestId(properties[0].name);
  fireEvent.click(card1);
  console.assert(
    console.log.mock.calls[0][0] === `${properties[0].name} was clicked!`
  );
});
