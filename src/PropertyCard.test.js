import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json"
describe("property card component", () => {
  it("renders a card for each property", () => {
    render(<App />)
    const cardContainer = screen.getByTestId('card-container')
    const numberOfProperties = data.length
    expect(cardContainer.children).toHaveLength(numberOfProperties)
  })
})
