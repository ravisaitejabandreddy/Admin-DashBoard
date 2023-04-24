import { fireEvent, render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Signin from ".";
import { AuthProvider } from "../../../authentication";
const renderWithRouter = (ui: React.ReactNode, { route = "/" } = {}) => {
  return {
    ...render(
      <MemoryRouter
        initialEntries={[{ pathname: "/candidateList", state: "/candidate/1" }]}
      >
        <AuthProvider>{ui}</AuthProvider>
      </MemoryRouter>
    ),
  };
};
describe("Signin Card", () => {
  test("Signin card is renderd", async () => {
    renderWithRouter(
      <Signin
        forgotButton="Forgot password"
        checkboxLabel="Remember me"
        signinButton="Sign in"
      />
    );
    expect(screen.getByTestId(/signin/i)).toBeInTheDocument();

    expect(screen.getByRole(/heading/i)).toBeInTheDocument();
  });

  test("loginCredentials renders properly", async () => {
    global.alert = jest.fn();
    renderWithRouter(
      <Signin
        forgotButton="Forgot password"
        checkboxLabel="Remember me"
        signinButton="Sign in"
      />
    );

    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "abc@gmail.com");

    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "Ucb");

    const buttonElement = screen.getByRole(/button/i, { name: "Sign in" });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledTimes(1);
  });

  test("loginCredentials renders properly", async () => {
    global.alert = jest.fn();
    renderWithRouter(
      <Signin
        forgotButton="Forgot password"
        checkboxLabel="Remember me"
        signinButton="Sign in"
      />
    );
    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "kavya@gmail.com");
    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "Kavya#939");

    const buttonElement = screen.getByRole(/button/i, { name: "Sign in" });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledWith("User loggedin successfully");
  });

  test("Changing the visibility of the password", () => {
    renderWithRouter(
      <Signin
        forgotButton="Forgot password"
        checkboxLabel="Remember me"
        signinButton="Sign in"
      />
    );
    const buttonElements = screen.getAllByRole(/button/i);
    fireEvent.click(buttonElements[0]);
    expect(document.getElementById("password")).toHaveAttribute("type", "text");
    fireEvent.click(buttonElements[0]);
    expect(document.getElementById("password")).toHaveAttribute(
      "type",
      "password"
    );
  });

  test("navigating to otp & signup cards", () => {
    renderWithRouter(
      <Signin
        forgotButton="Forgot password"
        checkboxLabel="Remember me"
        signinButton="Sign in"
      />
    );
    const forgot = screen.getByRole(/button/i, { name: "Forgot password" });
    fireEvent.click(forgot);

    const signUp = screen.getByRole(/button/i, { name: "Sign up" });
    fireEvent.click(signUp);
  });
});
