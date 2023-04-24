import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { LogOutSection } from ".";
import profile from "../../../../public/images/profile.svg";
describe("Log Out Section", () => {
  test("Check logout section is in document", () => {
    render(
      <LogOutSection
        avatar={profile}
        caption='James.co'
        name='James Rodriguez'
      />,
      { wrapper: BrowserRouter }
    );
    const result = screen.getByTestId("logoutSection");
    expect(result).toBeInTheDocument();
  });
});
