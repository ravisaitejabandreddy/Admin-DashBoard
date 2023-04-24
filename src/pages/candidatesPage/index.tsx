import { CandidateList } from "../../components/organisms/candidateList";
import { CandidatesScreenHeader } from "../../components/organisms/candidatesScreenHeader";
import { NavBar } from "../../components/organisms/navbar";
import { NavItems } from "../../components/organisms/navbar/config";
import { CandidatesTemplate } from "../../components/templates/candidatesTemplate";
import profile from "../../../public/images/profile.svg";
export const CandidatesPage = () => {
  return (
    <div data-testid="candidatesListPage">
      <CandidatesTemplate
        sideNav={
          <NavBar
            avatar={profile}
            caption="James.co"
            items={NavItems}
            pageId={2}
            name={"James Rodriguez"}
          />
        }
        main={<CandidateList />}
        header={<CandidatesScreenHeader buttons name="Candidates" />}
      />
    </div>
  );
};
