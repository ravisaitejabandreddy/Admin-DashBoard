import { Grid, styled } from "@mui/material";
import { TypographyComponent } from "../../atoms/typography";
import close from "../../../../public/images/close.svg";
import { ButtonComponent } from "../../atoms/button";
interface NoticeHeaderProps {
  onClick?: () => void;
}
const StyledButton = styled(ButtonComponent)({
  [`&.MuiButton-root:hover`]: {
    backgroundColor: "white",
    padding: "0px",
  },
  padding: "0px",
  width: "32px",
});
export const NoticeHeader = ({ onClick }: NoticeHeaderProps) => {
  return (
    <div data-testid="Header">
      <Grid container>
        <Grid item xs={5} justifyContent="flex-start">
          <TypographyComponent variant="subtitle1" sx={{ marginTop: "5px" }}>
            Pre-Adverse Action Notice
          </TypographyComponent>
        </Grid>
        <Grid item xs={6.1}></Grid>
        <Grid item xs={0.9} justifyContent="flex-end">
          <StyledButton
            onClick={onClick}
            startIcon={<img alt="close Icon" src={close} />}
            variant="text"
            disableRipple
            data-testid="closeButton"
          />
        </Grid>
      </Grid>
    </div>
  );
};
