import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SignupPage from ".";

describe("SignupPage Component", () => {
  test("component renders correctly", () => {
    render(<SignupPage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("signup-page")).toBeInTheDocument();
  });
});
