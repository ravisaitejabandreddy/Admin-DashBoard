import { styled, Box } from "@mui/material";
import { theme } from "../../../themes/theme";
export const StyledBox = styled(Box)({
  backgroundColor: theme.palette.accent.lightRed,
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
});
export const StyledUl = styled("ul")({
  color: theme.palette.accent.red,
  paddingLeft: "10px",
});
