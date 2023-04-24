import {
  act,
  fireEvent,
  logRoles,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ActionNotice } from ".";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Attachment with icon", () => {
  test("Attachment", async () => {
    render(
      <ActionNotice
        charges={["Assault Domestic Violence"]}
        fromEmail="kyle@checkr.com"
        name="John"
        toEmail="john.smith@checkr.com"
        disable={false}
      />,
      { wrapper: BrowserRouter }
    );
    const button = screen.getByRole("button", {
      name: /Preview/i,
    });
    const res = screen.getByTestId("notice");
    expect(res).toBeInTheDocument();
    expect(res).toHaveAttribute("id", "closed");
    expect(button).toBeInTheDocument();
    await fireEvent.click(button);
    expect(res).toHaveAttribute("id", "opened");
    const close = screen.getByAltText(/close/i);
    expect(close).toBeInTheDocument();
    fireEvent.click(close);
    expect(res).toHaveAttribute("id", "closed");
    const submit = screen.getByRole("button", {
      name: /Submit Notice/i,
    });
    act(() => {
      fireEvent.click(submit);
    });
    await waitFor(
      () => {
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/candidateList");
      },
      { timeout: 4000 }
    );
  });
});
