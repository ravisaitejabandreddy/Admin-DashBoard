import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonComponent } from ".";
import Icon from "../Icon";
import ORDER from "../../../../public/images/order.svg";
describe("Contained button", () => {
  test("renders correctly", () => {
    render(<ButtonComponent variant="contained">Contained</ButtonComponent>);
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("MuiButton-root");
  });
  test("disable the button", () => {
    render(
      <ButtonComponent variant="contained" disabled={true}>
        Contained
      </ButtonComponent>
    );
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("Mui-disabled");
    expect(result).toBeDisabled();
  });
  test("button is clicked", async () => {
    const mock = jest.fn();
    render(
      <ButtonComponent variant="contained" onClick={mock}>
        Contained
      </ButtonComponent>
    );
    const result = screen.getByTestId("button");
    fireEvent.click(result);
    expect(mock).toBeCalledTimes(1);
  });
});

describe("Outlined button", () => {
  test("outlined button", () => {
    render(<ButtonComponent variant="outlined">Outlined</ButtonComponent>);
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("MuiButton-root");
    expect(result).toHaveClass("MuiButton-outlined");
  });
});
describe("icon buttons", () => {
  test("start icon button", () => {
    render(
      <ButtonComponent
        startIcon={<Icon src={ORDER} alt="svg not Found" />}
        variant="contained"
      >
        Create Order
      </ButtonComponent>
    );
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
  });
  test("end icon button", () => {
    render(
      <ButtonComponent
        endIcon={<Icon src={ORDER} alt="svg not Found" />}
        variant="contained"
      >
        Create Order
      </ButtonComponent>
    );
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
  });
});
describe("page button", () => {
  test("button", async () => {
    render(
      <ButtonComponent color="inherit" variant="text">
        1
      </ButtonComponent>
    );
    const result = screen.getByTestId("button");
    expect(result).toBeInTheDocument();
    expect(result).toHaveClass("MuiButton-textInherit");
    await fireEvent.focus(result);
    expect(result).toHaveClass("Mui-focusVisible");
  });
});
