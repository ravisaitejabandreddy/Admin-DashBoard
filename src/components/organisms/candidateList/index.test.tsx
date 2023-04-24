import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { CandidateList } from ".";
describe("candidate list card", () => {
  afterEach(cleanup);
  test("list card", () => {
    render(<CandidateList />);
    const res = screen.getByTestId("card");
    expect(res).toBeInTheDocument();
  });
  test("checking the checkboxes", () => {
    render(<CandidateList />);
    const checkbox = screen.getByLabelText(/All Status/i);
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    const adjCheckbox = screen.getByLabelText(/Engaged/i);
    expect(adjCheckbox).not.toBeChecked();
    fireEvent.click(adjCheckbox);
    expect(adjCheckbox).toBeChecked();
    fireEvent.click(adjCheckbox);
    expect(adjCheckbox).not.toBeChecked();
  });
  test("check the test box", () => {
    render(<CandidateList />);
    const inputElement = screen.getByRole(/textbox/i);
    fireEvent.change(inputElement, { target: { value: "pavan" } });
    expect(inputElement).toHaveValue("pavan");
  });
  test("renders list of users", async () => {
    render(<CandidateList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    const rows = await waitFor(() => screen.getAllByRole("row"));
    expect(rows).toHaveLength(11);
  });
  test("check the checkboxes", async () => {
    render(<CandidateList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    const checkbox = screen.getByLabelText(/All Status/i);
    fireEvent.click(checkbox);
    const rows = await waitFor(() => screen.getAllByRole("row"));
    expect(rows).toHaveLength(11);
    const allCheckbox = screen.getByLabelText("All");
    fireEvent.click(allCheckbox);
    expect(rows).toHaveLength(11);
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByLabelText(/Clear/i));
    expect(screen.getAllByRole("row")).toHaveLength(10);
  });
  test("check the adjudication checkboxes", async () => {
    render(<CandidateList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    fireEvent.click(screen.getByLabelText(/Engaged/i));
    fireEvent.click(screen.getByLabelText(/Clear/i));
    expect(screen.getAllByRole("row")).toHaveLength(2);
  });
});
