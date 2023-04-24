import { getToggleButtonUtilityClass } from "@mui/material/ToggleButton";
import {
  cleanup,
  fireEvent,
  getByTestId,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Export from ".";

describe("Export Component", () => {
  afterEach(cleanup);
  test("Component renders correctly", async () => {
    render(<Export />);
    const buttonElement = screen.getByRole(/button/i);
    expect(buttonElement).toBeInTheDocument();

    await user.click(buttonElement);
    expect(screen.getByTestId("modal")).toBeInTheDocument();

    expect(screen.getAllByRole(/button/i)).toHaveLength(3);
    expect(
      screen.getByRole(/button/i, { name: "Export Report" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole(/button/i, { name: "Export Report" })
    ).toBeDisabled();
    expect(screen.getByTestId(/subtitle1/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/body2/i)).toHaveLength(2);
  });

  test("Changing input entries should work properly", async () => {
    render(<Export />);
    const buttonElement = screen.getByRole(/button/i);
    await user.click(buttonElement);

    const fromDateElement = screen.getByLabelText(/from date/i);
    const toDateElement = screen.getByLabelText(/to date/i);
    fireEvent.change(fromDateElement, {
      target: { value: "01-02-2022" },
    });

    fireEvent.change(toDateElement, { target: { value: "06-02-2022" } });
    expect(toDateElement).toHaveValue("06/02/2022");

    const exportButton = screen.getByRole(/button/i, { name: "Export Report" });
    expect(exportButton).toBeInTheDocument();
    await user.click(exportButton);
    expect(screen.getByTestId(/modal2/i)).toBeInTheDocument();
    expect(screen.getByTestId("sub-modal")).toHaveAttribute("id", "open");
    //waitForElementToBeRemoved(screen.getByTestId("modal2"));
    //expect(screen.getByTestId(/modal2/i)).toBeInTheDocument();
    //expect(screen.getByTestId("sub-modal")).toHaveAttribute("id", "close");
    // expect(screen.queryByTestId(/modal2/i)).toHaveAttribute("open", "false");
  });
  test("modal closes after 2seconds", async () => {
    render(<Export />);
    const buttonElement = screen.getByRole(/button/i);
    await user.click(buttonElement);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    const fromDateElement = screen.getByLabelText(/from date/i);
    const toDateElement = screen.getByLabelText(/to date/i);
    fireEvent.change(fromDateElement, {
      target: { value: "01-02-2022" },
    });

    fireEvent.change(toDateElement, { target: { value: "06-02-2022" } });
    const exportButton = screen.getByRole(/button/i, { name: "Export Report" });
    await user.click(exportButton);
    expect(screen.getByTestId(/modal2/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTestId(/modal2/i), {
      timeout: 4000,
    });
  });
});
