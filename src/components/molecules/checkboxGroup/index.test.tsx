import { render, screen } from "@testing-library/react";
import { CheckboxGroup } from ".";
const items = [
  {
    label: "Driving while license suspended",
    value: "Driving while license suspended",
  },
  {
    label: "Assault Domestic Violence",
    value: "Assault Domestic Violence",
  },
  {
    label: "Unable to verify employment history at Dunder Mifflin",
    value: "Unable to verify employment history at Dunder Mifflin",
  },
];
describe("Checkbox group", () => {
  test("checkboxes", () => {
    render(<CheckboxGroup items={items} onChange={() => {}} />);
    const res = screen.getByTestId("checkboxes");
    expect(res).toBeInTheDocument();
  });
});
