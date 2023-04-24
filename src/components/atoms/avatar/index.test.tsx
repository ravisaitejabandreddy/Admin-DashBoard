import { render, screen } from "@testing-library/react";
import { Avatar } from ".";

describe("Avatar Component", () => {
  test("Avatar Component is rendered properly", () => {
    render(<Avatar variant='circular' />);
    const avatarComponent = screen.getByTestId("avatar");
    expect(avatarComponent).toBeInTheDocument();
  });
});
