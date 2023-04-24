import { Grid } from "@mui/material";
import { Avatar } from "../../atoms/avatar";
import { TypographyComponent } from "../../atoms/typography";
import { theme } from "../../../themes/theme";
import Logout from "../LogoutModal";

interface LogOutSectionProps {
  avatar: string;
  name: string;
  caption: string;
}
export const LogOutSection = ({ ...props }: LogOutSectionProps) => {
  return (
    <Grid container sx={{ padding: "20px 12px" }} data-testid="logoutSection">
      <Grid item xs={2.5}>
        <Avatar src={props.avatar} />
      </Grid>
      <Grid item xs={7.5}>
        <TypographyComponent variant="body1">{props.name}</TypographyComponent>
        <TypographyComponent
          variant="caption2"
          sx={{ color: theme.palette.textColor.lowEmphasis }}
        >
          {props.caption}
        </TypographyComponent>
      </Grid>
      <Grid item xs={2}>
        <Logout />
      </Grid>
    </Grid>
  );
};
