import { styled } from "@mui/material";
import Input from "../components/atoms/Input/index";
import { TypographyComponent } from "../components/atoms/typography/index";
export const regPassword = /^(.{0,7}|\D*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
export const regEmail =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const TextComponent = styled(TypographyComponent)({
  color: "grey",
  fontWeight: "lighter",
  marginTop: "1.5px",
});

export const StyledButtonComponent = styled("button")({
  textTransform: "none",
  color: "#3E5FE2",
  border: "none",
  backgroundColor: "white",
  fontWeight: "bolder",
  cursor: "pointer",
});

export const StyledInput = styled(Input)`
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #e5e7ed;
  }
`;

export const style = {
  borderRadius: "4px",
  height: "36px",
  width: "99%",
};
