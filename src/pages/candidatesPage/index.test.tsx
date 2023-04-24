import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CandidatesPage } from ".";

describe("Candidates Page", () => {
  test("testing page", async () => {
    render(
      <BrowserRouter>
        <CandidatesPage />
      </BrowserRouter>
    );
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    expect(screen.getByTestId("candidatesListPage")).toBeInTheDocument();
  });
});
