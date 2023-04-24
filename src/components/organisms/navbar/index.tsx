import { Box, Card, CardContent, List, ListItem, styled } from "@mui/material";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
import { LogOutSection } from "../logout";
import { MenuItem } from "../../molecules/menuItem";
interface NavBarItemProps {
  icon: string;
  name: string;
  id: number;
  url: string;
}
export interface NavBarProps {
  items: NavBarItemProps[] | [];
  pageId: number;
  avatar: string;
  name: string;
  caption: string;
}
export const NavBar = ({ items, pageId, ...props }: NavBarProps) => {
  const StyledBox = styled(Box)`
    &.MuiBox-root {
      border-radius: 6px;
      backgroundcolor: "white";
    }
  `;
  return (
    <StyledBox data-testid="navbar" sx={{ maxWidth: "238px" }}>
      <Card>
        <CardContent>
          <List>
            <ListItem key="thead">
              <TypographyComponent variant="h1" sx={{ color: "purple" }}>
                RECRUIT
              </TypographyComponent>
            </ListItem>

            {items.map((item) => (
              <ListItem disablePadding key={item.id}>
                <MenuItem
                  name={item.name}
                  src={item.icon}
                  id={item.id}
                  url={item.url}
                  pageId={pageId}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
        <hr
          style={{
            border: "1px solid " + theme.palette.icon.stroke,
            marginTop: "125px",
          }}
        />
        <LogOutSection
          avatar={props.avatar}
          caption={props.name}
          name={props.name}
        />
      </Card>
    </StyledBox>
  );
};
