import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CandidateScreenHead } from ".";

describe("Candidates template", () => {
  test("template", async () => {
    render(<CandidateScreenHead buttons name="John Smith" id="1" />, {
      wrapper: BrowserRouter,
    });
    expect(screen.getByTestId("candidatesHead")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /John Smith/i }));
  });
  test("click pre adverse action", async () => {
    render(<CandidateScreenHead buttons name="John Smith" id="1" />, {
      wrapper: BrowserRouter,
    });
    fireEvent.click(
      screen.getByRole("button", { name: /Pre-Adverse Action/i })
    );
  });
  test("buttons not display", () => {
    render(<CandidateScreenHead buttons={false} name="John Smith" id="1" />, {
      wrapper: BrowserRouter,
    });
    expect(
      screen.queryByRole("button", { name: /Pre-Adverse Action/i })
    ).not.toBeInTheDocument();
  });
});
