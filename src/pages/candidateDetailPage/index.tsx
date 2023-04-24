import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavBar } from "../../components/organisms/navbar";
import { NavItems } from "../../components/organisms/navbar/config";
import { CandidatesTemplate } from "../../components/templates/candidatesTemplate";
import { CandidateService } from "../../service/CandidateService";
import profile from "../../../public/images/profile.svg";
import { CandidateScreenHead } from "../../components/organisms/candidateScreenHead";
import { CandidateScreenDetails } from "../../components/organisms/candidateScreenDetails";
import { CandidateInformation } from "../../components/organisms/candidateScreenDetails/config";
export interface CandidateType {
  id: number;
  name: string;
  adjudication: string;
  status: string;
  location: string;
  date: string;
  email: string;
  dob: string;
  phone: string;
  zipcode: string;
  socialSecurity: string;
  driversLicense: string;
  createdAt: string;
  package: string;
  completedDate: string;
  turnAroundTime: string;
  courtSearch: {}[];
}
export const CandidateDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [candidate, setCandidate] = useState({} as CandidateType);
  const setEngage = async () => {
    await CandidateService.editData({ id, adjudication: "engage" });
    navigate("/candidateList");
  };
  useEffect(() => {
    CandidateService.DetailCandidate(id).then((res) => {
      const candidates = res.data as CandidateType;
      setCandidate(candidates);
    });
  }, []);
  const { userDetails, reportDetails } = CandidateInformation(candidate);
  return (
    <div data-testid="detailPage">
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
          <CandidateScreenDetails
            candidateInfo={userDetails}
            courtSearchData={candidate.courtSearch ? candidate.courtSearch : []}
            reportInfo={reportDetails}
          />
        }
        header={
          <CandidateScreenHead
            buttons
            name={candidate.name}
            setEngage={setEngage}
            id={String(candidate.id)}
          />
        }
      />
    </div>
  );
};
