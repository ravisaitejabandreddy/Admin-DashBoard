import { render, screen } from "@testing-library/react";
import { NavBar } from ".";
import { theme } from "../../../themes/theme";
import profile from "../../../../public/images/profile.svg";
import { BrowserRouter } from "react-router-dom";
import { NavItems } from "./config";

describe("side nav bar", () => {
  test("Nav bar is in document", () => {
    render(
      <NavBar
        items={NavItems}
        pageId={1}
        avatar={profile}
        caption="James.co"
        name="James Rodriguez"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
    const iconButton = screen.getAllByTestId("link");
    expect(iconButton).toHaveLength(NavItems.length);
    const logoutSection = screen.getByTestId("logoutSection");
    expect(logoutSection).toBeInTheDocument();
  });
  test("Checking css properties for menu items", () => {
    render(
      <NavBar
        items={NavItems}
        pageId={1}
        avatar={profile}
        caption="James.co"
        name="James Rodriguez"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const homeButton = screen.getByRole("button", {
      name: /Home/,
    });
    expect(homeButton).toBeInTheDocument();
    expect(homeButton).toHaveStyle({
      backgroundColor: theme.palette.primary.primary300,
      color: theme.palette.primary.main,
    });
    const candidatesButton = screen.getByRole("button", {
      name: /Candidates/,
    });
    expect(candidatesButton).toBeInTheDocument();
    expect(candidatesButton).not.toHaveStyle({
      backgroundColor: theme.palette.primary.primary300,
      color: theme.palette.primary.main,
    });
  });
});
