import { act, render, screen } from "@testing-library/react";
import { CandidatesTable } from ".";
import { Columns } from "./index.styles";
const candidates = [
  {
    id: 1,
    name: "John Smith",
    adjudication: "",
    status: "CLEAR",
    location: "Bangalore",
    date: "22/10/2019",
  },
  {
    id: 2,
    name: "Sarene",
    adjudication: "ENGAGED",
    status: "CONSIDER",
    location: "Hyderabad",
    date: "20/09/2020",
  },
];
describe("Candidate Table", () => {
  beforeAll(() => {
    act(() => {
      render(<CandidatesTable header={Columns} candidates={candidates} />);
    });
  });
  test("table", () => {
    expect(screen.queryByTestId("table")).toBeInTheDocument();
  });
});
