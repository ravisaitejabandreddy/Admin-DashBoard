import { Dialog, styled } from "@mui/material";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
export const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    max-width: 700px;
    width: 696px;
    border-radius: 6px;
    max-height: 100%;
  }
  & .MuiDialogContent-root {
    padding: 20px 16px;
  }
  & .MuiDialogTitle-root {
    padding: 16px 20px;
  }
  &.MuiDialog-root .MuiDialogContent-root {
    padding: 12px 16px;
  }
`;
export const StyledTypography = styled(TypographyComponent)({
  color: theme.palette.textColor.mediumEmphasis,
});
export const StyledUl = styled("ul")({
  padding: "0px",
  paddingLeft: "24px",
  boxSizing: "border-box",
  margin: 0,
});
