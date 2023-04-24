import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SigninPage from ".";
import { AuthProvider } from "../../authentication";

describe("SigninPage Component", () => {
  test("component renders correctly", () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <SigninPage />
        </AuthProvider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("signin-page")).toBeInTheDocument();
  });
});
