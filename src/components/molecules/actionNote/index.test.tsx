import { render, screen } from "@testing-library/react";
import { ActionNote } from ".";

describe("testing the note", () => {
  test("Note", () => {
    render(<ActionNote />);
    const res = screen.getByTestId("note");
    expect(res).toBeInTheDocument();
  });
});
