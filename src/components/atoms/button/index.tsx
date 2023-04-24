import { Button, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../themes/theme";
interface ButtonProps {
  children?: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  component?: HTMLElement;
  disabled?: boolean;
  disableFocusRipple?: boolean;
  disableRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  sx?: {};
  variant: "contained" | "outlined" | "text";
  onClick?: () => void;
}
export const ButtonComponent = ({ children, ...props }: ButtonProps) => {
  const ButtonStyled = styled(Button)`
    &.MuiButton-root {
      border-radius: 6px;
    }
    &.Mui-disabled {
      background-color: #95aaff;
      color: white;
    }
    &.MuiButton-outlined {
      border: 1px solid ${theme.palette.icon.stroke};
      color: ${theme.palette.textColor.mediumEmphasis};
      background-color: white;
    }
    &.MuiButton-textInherit {
      &:hover {
        background-color: ${theme.palette.primary.primary300};
      }
      &:focus {
        color: ${theme.palette.primary.main};
        background-color: ${theme.palette.primary.primary300};
      }
    }
  `;
  return (
    <ButtonStyled {...props} data-testid="button">
      {children}
    </ButtonStyled>
  );
};
