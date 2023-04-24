import {
  ListItemIcon,
  ListItemText,
  ListItemButton,
  styled,
} from "@mui/material";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
import { theme } from "../../../themes/theme";
import { useNavigate } from "react-router-dom";
interface MenuItemProps {
  id: number;
  src: string;
  name: string;
  url: string;
  pageId: number;
}
export const MenuItem = ({ ...props }: MenuItemProps) => {
  const navigate = useNavigate();
  const res = props.pageId === props.id;
  const StyledItemButton = styled(ListItemButton)`
    &.MuiListItemButton-root {
      margin-top: 10px;
      border-radius: 6px;
      height: 44px;
      background-color: ${res ? theme.palette.primary.primary300 : "white"};
      color: ${res
        ? theme.palette.primary.main
        : theme.palette.textColor.highEmphasis};
    }
  `;
  const StyledItemIcon = styled(ListItemIcon)`
    &.MuiListItemIcon-root {
      min-width: 20%;
    }
  `;
  return (
    <StyledItemButton
      data-testid="link"
      tabIndex={props.id}
      onClick={() => navigate(props.url)}
    >
      <StyledItemIcon>
        <Icon alt="svg not found" src={props.src} />
      </StyledItemIcon>
      <ListItemText>
        <TypographyComponent variant="body1">{props.name}</TypographyComponent>
      </ListItemText>
    </StyledItemButton>
  );
};
