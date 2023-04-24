import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AdverseActionsPage } from ".";

describe("Candidates template", () => {
  test("template", async () => {
    render(<AdverseActionsPage />, {
      wrapper: BrowserRouter,
    });
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    expect(screen.getByTestId("adverseActionsPage")).toBeInTheDocument();
  });
});
