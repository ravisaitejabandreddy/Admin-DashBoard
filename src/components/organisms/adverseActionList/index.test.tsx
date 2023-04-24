import {
  cleanup,
  render,
  waitForElementToBeRemoved,
  screen,
  waitFor,
  fireEvent,
  logRoles,
} from "@testing-library/react";
import { AdverseActionList } from ".";

describe("candidate list card", () => {
  test("checking no of rows", async () => {
    render(<AdverseActionList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    const rows = await waitFor(() => screen.getAllByRole("row"));
    expect(rows).toHaveLength(4);
    const inputElement = screen.getByRole(/textbox/i);
    fireEvent.change(inputElement, { target: { value: "John" } });
    expect(inputElement).toHaveValue("John");
    expect(screen.getAllByRole("row")).toHaveLength(2);
  });
  test("clicking on check boxes", async () => {
    render(<AdverseActionList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    const filterButton = screen.getByRole("button", {
      name: /Filter/i,
    });
    fireEvent.click(filterButton);
    const allStatus = screen.getByLabelText(/All Status/i);
    fireEvent.click(allStatus);
    expect(screen.getAllByRole("row")).toHaveLength(4);
    fireEvent.click(allStatus);
    expect(screen.getAllByRole("row")).toHaveLength(4);
  });
  test("clicking on pending checkbox", async () => {
    render(<AdverseActionList />);
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    const filterButton = screen.getByRole("button", {
      name: /Filter/i,
    });
    fireEvent.click(filterButton);
    const Pending = screen.getByLabelText(/Pending/i);
    fireEvent.click(Pending);
    expect(screen.getAllByRole("row")).toHaveLength(1);
  });
});
