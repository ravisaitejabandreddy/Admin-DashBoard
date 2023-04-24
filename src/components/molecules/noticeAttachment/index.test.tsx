import { render, screen } from "@testing-library/react";
import { NoticeAttachment } from ".";

describe("Attachment with icon", () => {
  test("Attachment", () => {
    render(<NoticeAttachment value="Summary of right under the FCRA" />);
    const res = screen.getByTestId("attachment");
    expect(res).toBeInTheDocument();
  });
});
