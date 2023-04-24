import { CardContent, styled } from "@mui/material";
import { theme } from "../../../themes/theme";
import Input from "../../atoms/Input";

export const StyledCardContent = styled(CardContent)({
  [`&.MuiCardContent-root:last-child`]: {
    paddingBottom: "12px",
  },
  padding: "12px 16px",
});
export const StyledInput = styled(Input)({
  [`&.Mui-focused .MuiOutlinedInput-notchedOutline`]: {
    borderColor: "#e5e7ed",
  },
  borderRadius: "6px",
  height: "36px",
  padding: "8px 16px ",
  top: " 0px",
  width: "344px",
  border: "1px solid " + theme.palette.icon.stroke,
});
