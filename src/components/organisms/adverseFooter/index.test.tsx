import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AdverseFooter } from ".";
import { AuthProvider } from "../../../authentication";
const renderWithRouter = (ui: React.ReactNode) => {
  return {
    ...render(
      <BrowserRouter>
        <AuthProvider>{ui}</AuthProvider>
      </BrowserRouter>
    ),
  };
};
describe("Adverse footer", () => {
  test("Footer", () => {
    renderWithRouter(
      <AdverseFooter
        days={7}
        result={false}
        charges={["Assault Domestic Violence"]}
        toEmail={"pavan@gmail.com"}
      />
    );
    const res = screen.getByTestId("footer");
    expect(res).toBeInTheDocument();
  });
});
