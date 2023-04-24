import { render, screen } from "@testing-library/react";
import { CourtSearch } from ".";
const data = [
  {
    date: "2/22/2022",
    id: 1,
    search: "SSN Verification",
    status: "CLEAR",
  },
  {
    date: "3/13/2022",
    id: 2,
    search: "Sex Offender",
    status: "CLEAR",
  },
  {
    date: "7/2/2022",
    id: 3,
    search: "Global Watchlist",
    status: "CONSIDER",
  },
  {
    date: "2/20/2022",
    id: 4,
    search: "Federal Criminal",
    status: "CLEAR",
  },
  {
    date: "5/19/2022",
    id: 5,
    search: "County Criminal",
    status: "CLEAR",
  },
];
describe("Court search card", () => {
  test("table is in document", () => {
    render(<CourtSearch data={data} />);
    expect(screen.getByTestId("courtSearch")).toBeInTheDocument();
  });
});
