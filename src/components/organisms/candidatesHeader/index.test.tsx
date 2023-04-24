import { render, screen } from "@testing-library/react";
import { CandidatesListHeader } from ".";
describe("Candidates Table header", () => {
  test("Header", () => {
    render(<CandidatesListHeader group={[]} menu={true} />);
    const res = screen.getByTestId("table-header");
    expect(res).toBeInTheDocument();
  });
});
