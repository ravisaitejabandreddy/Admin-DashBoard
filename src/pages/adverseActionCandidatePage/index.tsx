import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../../components/organisms/navbar";
import { CandidatesTemplate } from "../../components/templates/candidatesTemplate";
import { CandidateService } from "../../service/CandidateService";
import { CandidateType } from "../candidateDetailPage";
import profile from "../../../public/images/profile.svg";
import { NavItems } from "../../components/organisms/navbar/config";
import { CandidateScreenHead } from "../../components/organisms/candidateScreenHead";
import { PreAdverseAction } from "../../components/organisms/preAdverseAction";
import { useAuth } from "../../authentication";
export const AdverseActionCandidatePage = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState({} as CandidateType);
  const auth = useAuth();
  useEffect(() => {
    CandidateService.DetailCandidate(id).then((res) => {
      const candidates = res.data as CandidateType;
      setCandidate(candidates);
    });
  }, []);
  return (
    <div data-testid="adverseActionPage">
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
        main={
          <PreAdverseAction
            fromEmail={auth.user}
            name={candidate.name}
            toEmail={candidate.email}
          />
        }
        header={
          <CandidateScreenHead
            buttons={false}
            name={"Pre-Adverse Action Notice"}
            id={String(id)}
          />
        }
      />
    </div>
  );
};
