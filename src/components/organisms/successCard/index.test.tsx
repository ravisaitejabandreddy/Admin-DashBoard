import { render, screen } from "@testing-library/react";
import { SuccessCard } from ".";

describe("Success card", () => {
  test("not in the document", () => {
    render(
      <SuccessCard
        name="Pre Advance Action Notice Successfully Sent"
        open={false}
      />
    );
    expect(screen.getByTestId("sub-modal")).toHaveAttribute("id", "close");
  });
  test("in the document", () => {
    render(
      <SuccessCard
        name="Pre Advance Action Notice Successfully Sent"
        open={true}
      />
    );
    expect(screen.getByTestId("sub-modal")).toHaveAttribute("id", "open");
  });
});
