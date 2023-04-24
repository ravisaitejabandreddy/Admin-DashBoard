import { Grid, InputAdornment } from "@mui/material";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
import { StyledCardContent, StyledInput } from "./index.styles";
import search from "../../../../public/images/search.svg";
import menu from "../../../../public/images/menu.svg";

import { ButtonComponent } from "../../atoms/button";
import { FilterCandidateButton, FilterProps } from "../filterCandidates";

interface CandidatesListHeaderProps extends FilterProps {
  changeHandler?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  value?: string;
  menu: boolean;
}

export const CandidatesListHeader = ({
  ...props
}: CandidatesListHeaderProps) => {
  return (
    <div data-testid="table-header">
      <StyledCardContent>
        <Grid container alignItems="center">
          <Grid container item xs={3} justifyContent="flex-start">
            <Grid item>
              <TypographyComponent variant="subtitle1">
                Candidate Information
              </TypographyComponent>
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid container item justifyContent="flex-end" xs={8} spacing={1}>
            <Grid item>
              <StyledInput
                onChange={props.changeHandler}
                placeholder="Search any candidate"
                startAdornment={
                  <InputAdornment position="start">
                    <Icon alt="hidden icon" src={search} />
                  </InputAdornment>
                }
                type="text"
                value={props.value}
              />
            </Grid>
            <Grid item>
              <FilterCandidateButton group={props.group} />
            </Grid>
            {props.menu && (
              <Grid item>
                <ButtonComponent
                  startIcon={<Icon alt="menu icon" src={menu} />}
                  variant="outlined"
                  sx={{
                    height: "36px",
                    width: "36px",
                    padding: 0,
                    paddingLeft: "10px",
                    minWidth: "36px",
                  }}
                  data-testid="menuButton"
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </StyledCardContent>
    </div>
  );
};
