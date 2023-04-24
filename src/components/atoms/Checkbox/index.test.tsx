import { render, screen } from "@testing-library/react";
import CheckBox from ".";

describe("Checkbox component", () => {
  test("renders correctly", () => {
    render(<CheckBox label="" />);
    expect(screen.getByRole(/checkbox/i)).toBeInTheDocument();
  });

  test("labelText renders properly", () => {
    render(<CheckBox label="Remember me" />);
    expect(screen.getByLabelText(/remember/i)).toBeInTheDocument();
  });

  test("checked control label", () => {
    render(<CheckBox label="" checked />);
    expect(screen.getByRole(/checkbox/i)).toBeChecked();
  });

  test("attributes of controlled components", () => {
    render(<CheckBox label="" />);
    expect(screen.getByRole(/checkbox/i)).toHaveAttribute("type", "checkbox");
  });
});
