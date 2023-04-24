import { render, screen, fireEvent } from "@testing-library/react";
import { FilterCandidateButton } from ".";
const group = [
  {
    checkboxes: [
      {
        label: "All Status",
        value: "allstatus",
      },
      {
        label: "Clear",
        value: "CLEAR",
      },
      {
        label: "Consider",
        value: "CONSIDER",
      },
    ],
    name: "Status",
  },
  {
    checkboxes: [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Engaged",
        value: "engaged",
      },
      {
        label: "Pre adverse action",
        value: "pre adverse action",
      },
    ],
    name: "Adjudication",
  },
];
describe("Filter Candidate Button", () => {
  test("Filter button in the document and check clicking", () => {
    render(<FilterCandidateButton group={group} />);
    const button = screen.getByRole("button", {
      name: /Filter/i,
    });
    expect(button).toBeInTheDocument();
    expect(document.getElementById("category")).toHaveStyle(
      "visibility:hidden"
    );
    fireEvent.click(button);
    expect(document.getElementById("category")).toHaveStyle(
      "visibility:visible"
    );
    fireEvent.click(button);
    expect(document.getElementById("category")).toHaveStyle(
      "visibility:hidden"
    );
  });
});
