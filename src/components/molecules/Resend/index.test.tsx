import { render, screen } from "@testing-library/react";
import Resend from ".";

describe("Resend Component", () => {
  test("resend component renders correctly", () => {
    render(<Resend button='Resend OTP' message="Didn't receive the OTP?" />);
    expect(screen.getByTestId(/body/i)).toBeInTheDocument();
    expect(screen.getByRole(/button/i)).toBeInTheDocument();
  });
});
