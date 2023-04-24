import { CandidatesScreenHeader } from "../../components/organisms/candidatesScreenHeader";
import { NavBar } from "../../components/organisms/navbar";
import { NavItems } from "../../components/organisms/navbar/config";
import { CandidatesTemplate } from "../../components/templates/candidatesTemplate";
import profile from "../../../public/images/profile.svg";
import { AdverseActionList } from "../../components/organisms/adverseActionList";
export const AdverseActionsPage = () => {
  return (
    <div data-testid="adverseActionsPage">
      <CandidatesTemplate
        sideNav={
          <NavBar
            avatar={profile}
            caption="James.co"
            items={NavItems}
            pageId={3}
            name={"James Rodriguez"}
          />
        }
        main={<AdverseActionList />}
        header={<CandidatesScreenHeader buttons={false} name="Candidates" />}
      />
    </div>
  );
};
