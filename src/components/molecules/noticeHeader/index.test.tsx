import { render, screen } from "@testing-library/react";
import { NoticeHeader } from ".";

describe("testing the head", () => {
  test("head", () => {
    render(<NoticeHeader onClick={() => {}} />);
    const res = screen.getByTestId("Header");
    expect(res).toBeInTheDocument();
  });
});
