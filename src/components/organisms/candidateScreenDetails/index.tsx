import { Grid } from "@mui/material";
import React from "react";
import { CandidateInfo } from "../../molecules/candidateInfo";
import { UserInfoProps } from "../../molecules/userInfo";
import { CourtSearch } from "../courtSearch";
interface CandidateScreenDetailsProps {
  candidateInfo: UserInfoProps[];
  reportInfo: UserInfoProps[];
  courtSearchData: {}[];
}
export const CandidateScreenDetails = ({
  ...props
}: CandidateScreenDetailsProps) => {
  return (
    <div data-testid="details">
      <Grid item container direction="column" spacing={3}>
        <Grid item xs={12}>
          <CandidateInfo
            details={props.candidateInfo}
            headText="Candidate Information"
          />
        </Grid>
        <Grid item xs={12}>
          <CandidateInfo
            details={props.reportInfo}
            headText="Report Information"
          />
        </Grid>
        <Grid item xs={12}>
          <CourtSearch data={props.courtSearchData} />
        </Grid>
      </Grid>
    </div>
  );
};
