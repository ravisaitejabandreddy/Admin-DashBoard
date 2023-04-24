import { Avatar as MuiAvatar, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
interface AvatarProps {
  variant?: "circular" | "rounded" | "square";
  sx?: SxProps<Theme>;
  src?: string;

  children?: ReactNode | string;
}
export const Avatar = (props: AvatarProps) => {
  return (
    <MuiAvatar
      data-testid='avatar'
      variant={props.variant}
      sx={props.sx}
      src={props.src}
    >
      {props.children}
    </MuiAvatar>
  );
};
