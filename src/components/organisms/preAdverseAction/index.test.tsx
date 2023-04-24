import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PreAdverseAction } from ".";

describe("testing the notice card", () => {
  test("Notice card", () => {
    render(
      <PreAdverseAction
        fromEmail="kyle@checkr.com"
        name="John Smith"
        toEmail="john.smith@checkr.com"
      />,
      { wrapper: BrowserRouter }
    );
    const res = screen.getByTestId("actionNotice");
    expect(res).toBeInTheDocument();
  });
  test("checking checkbox", async () => {
    render(
      <PreAdverseAction
        fromEmail="kyle@checkr.com"
        name="John Smith"
        toEmail="john.smith@checkr.com"
      />,
      { wrapper: BrowserRouter }
    );
    const res = screen.getByLabelText(/suspended/i);
    expect(res).toBeInTheDocument();
    await fireEvent.click(res);
    expect(res).toBeChecked();
    await fireEvent.click(res);
    expect(res).not.toBeChecked();
  });
});
