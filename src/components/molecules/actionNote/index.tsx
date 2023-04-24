import { Grid } from "@mui/material";
import { TypographyComponent } from "../../atoms/typography";
import { StyledBox, StyledUl } from "./index.styles";

export const ActionNote = () => {
  return (
    <StyledBox width="90%" height="80px" data-testid="note">
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={11}>
          <StyledUl>
            <li>
              <TypographyComponent variant="caption2">
                Please carefully review the list of charges (in bold) and your
                contact information.
              </TypographyComponent>
            </li>
            <li>
              <TypographyComponent variant="caption2">
                Please note that we will send the corresponding post adverse
                action email automatically after 7 days.
              </TypographyComponent>
            </li>
          </StyledUl>
        </Grid>
      </Grid>
    </StyledBox>
  );
};
