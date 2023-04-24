import { fireEvent, render, screen } from "@testing-library/react";
import { PaginationTable } from ".";
import { Columns } from "../candidatesTable/index.styles";
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
    adjudication: "",
    status: "CONSIDER",
    location: "Hyderabad",
    date: "20/09/2020",
  },
];
const candidates1 = [
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
    adjudication: "",
    status: "CONSIDER",
    location: "Hyderabad",
    date: "20/09/2020",
  },
  {
    id: 3,
    name: "Walsh",
    adjudication: "",
    status: "CLEAR",
    location: "US",
    date: "17/03/2020",
  },
  {
    id: 4,
    name: "Maurizia",
    adjudication: "",
    status: "CONSIDER",
    location: "Australia",
    date: "18/04/2020",
  },
  {
    id: 5,
    name: "Kendre",
    adjudication: "",
    status: "CONSIDER",
    location: "Africa",
    date: "06/05/2019",
  },
  {
    id: 6,
    name: "Erastus",
    adjudication: "",
    status: "CLEAR",
    location: "Chennai",
    date: "13/05/2020",
  },
  {
    id: 7,
    name: "Jereme",
    adjudication: "",
    status: "CLEAR",
    location: "Delhi",
    date: "15/05/2020",
  },
  {
    id: 8,
    name: "Cari",
    adjudication: "",
    status: "CONSIDER",
    location: "Mumbai",
    date: "18/06/2019",
  },
  {
    id: 9,
    name: "Kimble",
    adjudication: "",
    status: "CLEAR",
    location: "London",
    date: "13/07/2020",
  },
  {
    id: 10,
    name: "Bob",
    adjudication: "",
    status: "CONSIDER",
    location: "Tokyo",
    date: "25/08/2019",
  },
  {
    id: 11,
    name: "Alice",
    adjudication: "",
    status: "CLEAR",
    location: "Melbourne",
    date: "23/02/2020",
  },
];
describe("Pagination table", () => {
  test("Table", () => {
    render(<PaginationTable header={Columns} candidates={candidates} />);
    expect(screen.getByTestId("page-table")).toBeInTheDocument();
    const pageButton = screen.getByText(/1/i, {
      selector: "button",
    });
    expect(pageButton).toBeInTheDocument();
    fireEvent.click(pageButton);
    expect(pageButton).toHaveAttribute("aria-current", "true");
    const select = screen.getByRole("button", {
      name: /10 per page/i,
    });
    expect(select).toBeInTheDocument();
    fireEvent.mouseDown(select);
    expect(select).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(
      screen.getByRole("option", {
        name: /20 per page/i,
      })
    );
    expect(select).toHaveAttribute("aria-expanded", "false");
  });
  test("table with length>10", () => {
    render(<PaginationTable header={Columns} candidates={candidates1} />);
    expect(screen.getByTestId("page-table")).toBeInTheDocument();
  });
});
