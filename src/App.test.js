import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav link", () => {
  render(<App />);
  const navElement = screen.getByText(/Properties/i);
  expect(navElement).toBeInTheDocument();
});
