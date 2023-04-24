import { CardContent, styled } from "@mui/material";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";

export const StyledHr = styled("hr")({
  margin: 0,
  border: "1px solid " + theme.palette.icon.stroke,
});
export const StyledTypography = styled(TypographyComponent)`
  color: ${theme.palette.textColor.mediumEmphasis};
`;
export const StyledCardContent = styled(CardContent)({
  [`&.MuiCardContent-root:last-child`]: {
    paddingBottom: "12px",
  },
  padding: "20px",
});
