import { Grid } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/button";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
import Order from "../../../../public/images/order.svg";
import Export from "../Export";

interface CandidatesScreenHeaderProps {
  name: string;
  buttons: boolean;
}
export const CandidatesScreenHeader = ({
  name,
  buttons,
}: CandidatesScreenHeaderProps) => {
  return (
    <div data-testid='candidatesHead'>
      <Grid item container alignItems='center' xs={12}>
        <Grid container item xs={1} justifyContent='flex-start'>
          <Grid item>
            <TypographyComponent variant='h1'>{name}</TypographyComponent>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        {buttons && (
          <Grid item container xs={10} justifyContent='flex-end' spacing={1}>
            <Grid item>
              <Export />
            </Grid>
            <Grid item>
              <ButtonComponent
                startIcon={<Icon alt='order' src={Order} />}
                variant='contained'
                sx={{ boxShadow: "none" }}
              >
                Manual Order
              </ButtonComponent>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
