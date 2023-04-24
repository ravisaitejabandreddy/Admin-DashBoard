import { Grid } from "@mui/material";
import React from "react";
interface CandidatesTemplateProps {
  sideNav: React.ReactNode;
  header: React.ReactNode;
  main: React.ReactNode;
}
export const CandidatesTemplate = ({ ...props }: CandidatesTemplateProps) => {
  return (
    <div data-testid="candidatesPage">
      <Grid container spacing={3}>
        <Grid item xs={2.3}>
          {props.sideNav}
        </Grid>
        <Grid container item spacing={2} direction="column" xs={9.7}>
          <Grid item>{props.header}</Grid>
          <Grid item>{props.main}</Grid>
        </Grid>
      </Grid>
    </div>
  );
};
