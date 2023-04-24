import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ForgotPage from ".";

describe("ForgotPasswordPage Component", () => {
  test("component renders correctly", () => {
    render(<ForgotPage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("forgot-password")).toBeInTheDocument();
  });
});
