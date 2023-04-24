import { Grid, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import { TypographyComponent } from "../../atoms/typography";
import { StyledBox, StyledPage } from "./index.styles";
interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  indexOfLastPost: number;
  paginate: (pageNumber: React.SetStateAction<number>) => void;
  setPostsPerPage: (value: number) => void;
}
export const PaginationFooter = ({ ...props }: PaginationProps) => {
  const pageNumbers = Math.ceil(props.totalPosts / props.postsPerPage);
  const handleClick = (event: React.ChangeEvent<unknown>, value: number) => {
    props.paginate(value);
  };
  const handleChange = (event: SelectChangeEvent) => {
    props.setPostsPerPage(Number(event.target.value));
  };
  return (
    <div data-testid="page-footer">
      <StyledBox>
        <Grid container>
          <Grid
            container
            item
            justifyContent="flex-start"
            alignItems="center"
            xs={4}
          >
            <Grid item xs={3}>
              <TypographyComponent variant="caption2">
                {props.indexOfLastPost} out of {props.totalPosts}
              </TypographyComponent>
            </Grid>
            <Grid item xs={1}>
              <Select
                id="demo-simple-select"
                value={props.postsPerPage.toString()}
                sx={{ width: "123px", height: "26px" }}
                onChange={handleChange}
                data-testid="select"
              >
                <MenuItem value={10}>
                  <TypographyComponent variant="caption2">
                    10 per page
                  </TypographyComponent>
                </MenuItem>
                <MenuItem value={20}>
                  <TypographyComponent variant="caption2">
                    20 per page
                  </TypographyComponent>
                </MenuItem>
                <MenuItem value={30}>
                  <TypographyComponent variant="caption2">
                    30 per page
                  </TypographyComponent>
                </MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            alignItems="center"
            xs={6}
          >
            <Grid item>
              <StyledPage
                count={pageNumbers}
                shape="rounded"
                color="primary"
                size="small"
                onChange={handleClick}
                data-testid="page-button"
              />
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </div>
  );
};
