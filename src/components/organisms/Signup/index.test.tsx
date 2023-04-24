import { fireEvent, render, screen } from "@testing-library/react";
import Signup from ".";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../../authentication";
import React from "react";
const renderWithRouter = (ui: React.ReactNode) => {
  return {
    ...render(
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    ),
  };
};
describe("Signup Component", () => {
  test("Signup card renders properly", () => {
    renderWithRouter(<Signup />);
    expect(screen.getByTestId(/signup/i)).toBeInTheDocument();
  });

  test("Changing the entries should work properly", async () => {
    global.localStorage.setItem = jest.fn();
    global.alert = jest.fn();
    renderWithRouter(<Signup />);
    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "kavya@gmail.com");
    expect(emailField).toHaveValue("kavya@gmail.com");

    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "#Kavya#939");
    expect(passwordField).toHaveValue("#Kavya#939");

    const confirmPasswordField =
      screen.getByPlaceholderText(/confirm password/i);
    expect(confirmPasswordField).toBeInTheDocument();
    await user.type(confirmPasswordField, "#Kavya#939");
    expect(confirmPasswordField).toHaveValue("#Kavya#939");

    const buttonElement = screen.getByRole(/button/i, { name: /sign up/i });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledTimes(1);
    expect(global.localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("Password should follow the validations", async () => {
    global.alert = jest.fn();
    renderWithRouter(<Signup />);
    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "kavya@gmail.com");

    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "#908ab");

    const confirmPasswordField =
      screen.getByPlaceholderText(/confirm password/i);
    expect(confirmPasswordField).toBeInTheDocument();
    await user.type(confirmPasswordField, "78");

    const buttonElement = screen.getByRole(/button/i, { name: /sign up/i });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledTimes(1);
  });

  test("Password should match with Confirm Password", async () => {
    global.alert = jest.fn();
    renderWithRouter(<Signup />);
    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "kavya@gmail.com");

    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "Abcd%4567");

    const confirmPasswordField =
      screen.getByPlaceholderText(/confirm password/i);
    expect(confirmPasswordField).toBeInTheDocument();
    await user.type(confirmPasswordField, "Adgt*6543");

    const buttonElement = screen.getByRole(/button/i, { name: /sign up/i });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledTimes(1);
  });

  test("Email should follow the validations", async () => {
    global.alert = jest.fn();
    renderWithRouter(<Signup />);
    const emailField = screen.getByPlaceholderText(/enter email address/i);
    expect(emailField).toBeInTheDocument();
    await user.type(emailField, "kavya.gmail.com");

    const passwordField = screen.getByPlaceholderText(/enter password/i);
    expect(passwordField).toBeInTheDocument();
    await user.type(passwordField, "Abcd%4567");

    const confirmPasswordField =
      screen.getByPlaceholderText(/confirm password/i);
    expect(confirmPasswordField).toBeInTheDocument();
    await user.type(confirmPasswordField, "Adgt*6543");

    const buttonElement = screen.getByRole(/button/i, { name: /sign up/i });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(global.alert).toBeCalledTimes(1);
  });

  test("navigating to signin page", () => {
    render(<Signup />, { wrapper: BrowserRouter });
    const signIn = screen.getByRole(/button/i, { name: "Sign in" });
    fireEvent.click(signIn);
  });

  test("changing the visibility of the passwords", () => {
    render(<Signup />, { wrapper: BrowserRouter });
    const buttonElements = screen.getAllByRole(/button/i);
    fireEvent.click(buttonElements[0]);
    const input = document.getElementById("password");
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(buttonElements[0]);
    expect(input).toHaveAttribute("type", "password");
  });

  test("changing the visibility of the confirm password", () => {
    render(<Signup />, { wrapper: BrowserRouter });
    const buttonElements = screen.getAllByRole(/button/i);
    const input = document.getElementById("confirm-password");
    fireEvent.click(buttonElements[1]);
    expect(input).toHaveAttribute("type", "text");
    fireEvent.click(buttonElements[1]);
    expect(input).toHaveAttribute("type", "password");
  });
});
