import { Grid, Paper } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/button";
import filter from "../../../../public/images/filter.svg";
import { StyledCardContent } from "../candidatesHeader/index.styles";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
import Icon from "../../atoms/Icon";
import { CheckboxGroup } from "../../molecules/checkboxGroup";
interface GroupType {
  name: string;
  checkboxes: {
    label: string;
    value: string;
  }[];
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface FilterProps {
  group: GroupType[];
}
export const FilterCandidateButton = ({ group }: FilterProps) => {
  const handleClick = () => {
    let filterMode = document.getElementById("category")!;
    if (
      filterMode.style.visibility === "hidden" ||
      filterMode.style.visibility === ""
    )
      filterMode.style.visibility = "visible";
    else filterMode.style.visibility = "hidden";
  };
  return (
    <div>
      <Grid
        item
        container
        direction="column"
        spacing={1}
        justifyContent="flex-start"
      >
        <Grid item>
          <ButtonComponent
            startIcon={<Icon alt="filter icon" src={filter} />}
            variant="outlined"
            onClick={handleClick}
          >
            Filter
          </ButtonComponent>
        </Grid>
        <Grid item>
          <Paper
            id="category"
            sx={{
              position: "fixed",
              width: "24%",
              right: "6%",
              visibility: "hidden",
              zIndex: 1,
              backgroundColor: "white",
              borderRadius: "6px",
            }}
            data-testid="filter-group"
          >
            <StyledCardContent
              sx={{
                borderBottom: "1px solid " + theme.palette.icon.stroke,
              }}
            >
              <TypographyComponent variant="body1">Filters</TypographyComponent>
            </StyledCardContent>
            <StyledCardContent>
              <Grid container direction="column" spacing={1}>
                {group.map((item) => (
                  <Grid container item direction="column" key={item.name}>
                    <Grid item>
                      <TypographyComponent
                        variant="body1"
                        sx={{
                          color: theme.palette.textColor.lowEmphasis,
                          paddingBottom: "5px",
                        }}
                      >
                        {item.name}
                      </TypographyComponent>
                    </Grid>
                    <Grid item>
                      <CheckboxGroup
                        items={item.checkboxes}
                        onChange={item.handleChange}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </StyledCardContent>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
