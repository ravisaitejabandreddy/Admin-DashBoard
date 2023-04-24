import { render, screen } from "@testing-library/react";
import { AdverseProperties } from ".";

describe("testing the Properties", () => {
  test("Properties", () => {
    render(<AdverseProperties property="From" value="kyle@checkr.com" />);
    const res = screen.getByTestId("property");
    expect(res).toBeInTheDocument();
  });
});
