import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AdverseActionCandidatePage } from ".";
import { AuthProvider } from "../../authentication";
const renderWithRouter = (ui: React.ReactNode) => {
  return {
    ...render(
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    ),
  };
};
describe("Adverse action page", () => {
  test("page in document", async () => {
    renderWithRouter(<AdverseActionCandidatePage />);
    expect(screen.getByTestId("adverseActionPage")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText(/John.smith@checkr.com/i)).toBeInTheDocument();
    });
  });
});
