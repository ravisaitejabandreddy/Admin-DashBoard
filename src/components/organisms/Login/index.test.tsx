import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login, { validateChar } from ".";
import user from "@testing-library/user-event";

describe("Login Component", () => {
  test("Button should renderly", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getAllByRole(/button/i)).toHaveLength(3);
  });

  test("input", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getAllByRole(/textbox/i)).toHaveLength(4);
  });

  test("otp field renders correctly", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const otpField = screen.getByTestId("otp-input");
    expect(otpField).toBeInTheDocument();
  });

  test("Heading Element", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const textElement = screen.getAllByRole(/heading/i);
    expect(textElement).toHaveLength(1);
  });

  test("Verification button should be disabled initially", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const verifyButton = screen.getByRole(/button/i, { name: "Continue" });
    expect(verifyButton).toBeInTheDocument();
    expect(verifyButton).toBeDisabled();
  });

  test("should allow only digits to type", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    expect(validateChar("2")).toBeTruthy();
    expect(validateChar("y")).toBeFalsy();
  });

  test("OTP Validation", async () => {
    window.alert = jest.fn();
    render(<Login />, {
      wrapper: BrowserRouter,
    });

    const inputElements = screen.getAllByRole(/textbox/i);
    inputElements.map((input, index) =>
      fireEvent.change(input, { target: { value: index } })
    );
    expect(inputElements[1]).toHaveValue("1");

    const continueButton = screen.getByText("Continue");
    fireEvent.click(continueButton);
    expect(window.alert).toBeCalledWith("Verified Successfully");
  });

  test("testing wrong OTP", async () => {
    window.alert = jest.fn();
    render(<Login />, {
      wrapper: BrowserRouter,
    });

    const resendButton = screen.getByText("Resend OTP");
    await user.click(resendButton);

    const inputElements = screen.getAllByRole(/textbox/i);
    inputElements.map((input, index) =>
      fireEvent.change(input, { target: { value: index } })
    );

    const continueButton = screen.getByText("Continue");
    await user.click(continueButton);
    expect(window.alert).toBeCalledWith("Please enter correct OTP");
  });
  test("navigating to signin page", () => {
    render(<Login />, {
      wrapper: BrowserRouter,
    });
    const backButton = screen.getByRole(/button/i, {
      name: "go back button Go Back",
    });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
  });
});
