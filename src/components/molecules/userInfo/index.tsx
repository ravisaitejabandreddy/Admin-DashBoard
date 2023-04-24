import { Box, Card, CardContent, Grid, styled } from "@mui/material";
import { theme } from "../../../themes/theme";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
export interface UserInfoProps {
  icon: string;
  property: string;
  value: string;
}
export const UserInfo = ({ icon, property, value }: UserInfoProps) => {
  const StyledCard = styled(Card)`
    &.MuiCard-root {
      border: 1px solid #e5e7ed;
      border-radius: 12px;
      background: #fafafc;
      height: 68px;
      box-shadow: none;
    }
    & .MuiCardContent-root {
      padding: 11px;
    }
  `;
  const StyledBox = styled(Box)`
    &.MuiBox-root {
      background-color: white;
      border: 1px solid #e5e7ed;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
  return (
    <Box data-testid="card">
      <StyledCard>
        <CardContent>
          <Grid container spacing={1.2}>
            <Grid container item justifyContent="flex-start" xs={2.5}>
              <Grid item xs={12}>
                <StyledBox height="44px">
                  <Icon alt={property} src={icon} />
                </StyledBox>
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={9.5}
              direction="column"
              spacing={0.5}
              justifyContent="center"
            >
              <Grid item>
                <TypographyComponent
                  variant="body2"
                  sx={{ color: theme.palette.textColor.mediumEmphasis }}
                >
                  {property}
                </TypographyComponent>
              </Grid>
              <Grid item>
                <TypographyComponent variant="body1">
                  {value === "" ? "-" : value}
                </TypographyComponent>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Box>
  );
};
