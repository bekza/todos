import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Tasks", () => {
  render(<App />);
  const linkElement = screen.getByText(/Tasks/i);
  expect(linkElement).toBeInTheDocument();
});
