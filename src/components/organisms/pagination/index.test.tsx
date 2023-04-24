import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { PaginationFooter } from ".";

describe("Table Footer", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  afterEach(() => {
    cleanup();
  });
  test("Pagination", async () => {
    const paginate = jest.fn();
    const setPostsPerPage = jest.fn();
    render(
      <PaginationFooter
        indexOfLastPost={10}
        postsPerPage={10}
        totalPosts={19}
        paginate={paginate}
        setPostsPerPage={setPostsPerPage}
      />
    );
    const res = screen.getByTestId("page-footer");
    expect(res).toBeInTheDocument();
    const pageButton = screen.getByText(/1/i, {
      selector: "button",
    });
    expect(pageButton).toBeInTheDocument();
    fireEvent.click(pageButton);
    expect(paginate).toBeCalledTimes(1);
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
    expect(setPostsPerPage).toBeCalledTimes(1);
  });
});
