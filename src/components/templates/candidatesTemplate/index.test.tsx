import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CandidatesTemplate } from ".";
import { CandidateList } from "../../organisms/candidateList";
import { CandidatesScreenHeader } from "../../organisms/candidatesScreenHeader";
import { NavBar } from "../../organisms/navbar";
import { NavItems } from "../../organisms/navbar/config";
describe("Candidates template", () => {
  test("template", async () => {
    render(
      <CandidatesTemplate
        sideNav={
          <NavBar
            avatar='static/media/public/images/profile.svg'
            caption='James.co'
            items={NavItems}
            pageId={2}
            name={"James Rodriguez"}
          />
        }
        main={<CandidateList />}
        header={<CandidatesScreenHeader buttons name='Candidates' />}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
    await waitForElementToBeRemoved(screen.getByText(/No rows/i));
    expect(screen.getByTestId("candidatesPage")).toBeInTheDocument();
  });
});
