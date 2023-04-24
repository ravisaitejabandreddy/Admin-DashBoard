import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MenuItem } from ".";
import Home from "../../../../public/images/home.svg";
import { theme } from "../../../themes/theme";
import Candidates from "../../../../public/images/candidates.svg";
describe("Menu item", () => {
  test("Item button is in document", () => {
    render(<MenuItem id={1} name="Home" pageId={1} src={Home} url="/" />, {
      wrapper: BrowserRouter,
    });
    const result = screen.getByTestId("link");
    expect(result).toBeInTheDocument();
  });
  test("Checking classes visited page", () => {
    render(<MenuItem id={1} name="Home" pageId={1} src={Home} url="/" />, {
      wrapper: BrowserRouter,
    });
    const result = screen.getByTestId("link");
    expect(result).toHaveClass("MuiListItemButton-root");
    expect(result).toHaveStyle({
      backgroundColor: theme.palette.primary.primary300,
      color: theme.palette.primary.main,
    });
  });
  test("Checking classes for not visited page", () => {
    render(<MenuItem id={1} name="Home" pageId={2} src={Home} url="/" />, {
      wrapper: BrowserRouter,
    });
    const result = screen.getByTestId("link");
    expect(result).toHaveClass("MuiListItemButton-root");
    expect(result).not.toHaveStyle({
      backgroundColor: theme.palette.primary.primary300,
      color: theme.palette.primary.main,
    });
  });
  test("click the button", () => {
    render(
      <MenuItem
        id={2}
        name="Candidates"
        pageId={2}
        src={Candidates}
        url="/candidateList"
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText(/Candidates/i)).toBeInTheDocument();
  });
});
