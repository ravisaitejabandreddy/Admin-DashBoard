import { render, screen } from "@testing-library/react";
import { CandidatesScreenHeader } from ".";

describe("test the candidate screen head", () => {
  test("candidates head", () => {
    render(<CandidatesScreenHeader buttons name="Candidates" />);
    expect(screen.getByTestId("candidatesHead")).toBeInTheDocument();
  });
});
