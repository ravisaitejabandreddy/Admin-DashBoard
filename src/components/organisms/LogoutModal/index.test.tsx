import Logout from ".";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../../authentication";
const renderWithRouter = (ui: any) => {
  return {
    ...render(
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    ),
  };
};
describe("logout card", () => {
  test("modal rendered", async () => {
    renderWithRouter(<Logout />);
    const buttonElement = screen.getByRole(/button/i);
    expect(buttonElement).toBeInTheDocument();

    await user.click(buttonElement);
    expect(screen.getAllByRole(/button/i)).toHaveLength(2);
    expect(screen.getByRole(/button/i, { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole(/button/i, { name: "Logout" })).toBeInTheDocument();
    expect(screen.getByTestId(/subtitle1/i)).toBeInTheDocument();
    expect(screen.getByTestId(/body2/i)).toBeInTheDocument();
  });

  test("cancel and logout button should work properly", async () => {
    renderWithRouter(<Logout />);
    const buttonElement = screen.getByRole(/button/i);

    await user.click(buttonElement);
    expect(screen.getByTestId(/modal/i)).toBeInTheDocument();

    const cancelButton = screen.getByRole(/button/i, { name: "Cancel" });
    await user.click(cancelButton);
    expect(screen.queryAllByRole(/button/i)).toHaveLength(2);
  });

  test("logout button works properly", async () => {
    renderWithRouter(<Logout />);
    const buttonElement = screen.getByRole(/button/i);
    await user.click(buttonElement);

    const logoutButton = screen.getByRole(/button/i, { name: "Logout" });
    await user.click(logoutButton);
    expect(screen.queryAllByRole(/button/i)).toHaveLength(2);
  });
});
