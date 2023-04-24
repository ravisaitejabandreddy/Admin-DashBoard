import { render, screen } from "@testing-library/react";
import eye from "../../../../public/images/eye.svg";
import Icon from ".";

describe("Icon element", () => {
  test("renders correctly", () => {
    render(<Icon src={eye} alt="hidden icon" />);
    const imageElement = screen.getByRole(/img/i);
    expect(imageElement).toBeInTheDocument();
  });

  test("alt attribute is renderd correctly", () => {
    render(<Icon src={eye} alt="hidden Icon" />);
    expect(screen.getByAltText(/hidden icon/i)).toBeInTheDocument();
  });

  test("invalid attribute", () => {
    render(<Icon src={eye} alt="hidden Icon" />);
    expect(screen.getByRole(/img/i)).not.toHaveAttribute("alt", "eye icon");
  });

  test("image rendered with proper source", () => {
    render(<Icon src={eye} alt="hidden Icon" />);
    expect(screen.getByRole(/img/i)).toHaveAttribute("src", eye);
  });
});
