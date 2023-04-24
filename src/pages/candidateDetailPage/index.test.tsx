import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CandidateDetailsPage } from ".";
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  return {
    ...render(ui, { wrapper: BrowserRouter }),
  };
};
describe("Candidate detail page", () => {
  test("template and checking engage button", async () => {
    renderWithRouter(<CandidateDetailsPage />, { route: "/candidate/1" });
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    expect(screen.getByTestId("detailPage")).toBeInTheDocument();
    const button = screen.getByRole("button", {
      name: /Engage/i,
    });
    act(() => {
      fireEvent.click(button);
    });
    // expect(screen.getByText(/Candidates/i)).toBeInTheDocument();
    await waitFor(() =>
      expect(mockedUsedNavigate).toHaveBeenCalledWith("/candidateList")
    );
  });
});
