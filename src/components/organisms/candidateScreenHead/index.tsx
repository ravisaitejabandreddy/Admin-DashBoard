import { Grid } from "@mui/material";
import { ButtonComponent } from "../../atoms/button";
import Icon from "../../atoms/Icon";
import back from "../../../../public/images/back.svg";
import { TypographyComponent } from "../../atoms/typography";
import { useNavigate } from "react-router-dom";
interface CandidateScreenHeadProps {
  buttons: boolean;
  name: string;
  setEngage?: () => void;
  id: string;
}
export const CandidateScreenHead = ({ ...props }: CandidateScreenHeadProps) => {
  const navigate = useNavigate();
  const route = "/actionCandidate/" + props.id;
  const variant = props.buttons ? "h1" : "subtitle1";
  return (
    <div data-testid="candidatesHead">
      <Grid container alignItems="center" sx={{ height: "43px" }}>
        <Grid container item xs={3} justifyContent="flex-start">
          <Grid item>
            <ButtonComponent
              onClick={() => navigate(-1)}
              startIcon={<Icon alt="back" src={back} />}
              variant="text"
              sx={{ color: "black" }}
            >
              <TypographyComponent variant={variant}>
                {props.name}
              </TypographyComponent>
            </ButtonComponent>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        {props.buttons && (
          <Grid item container xs={8} justifyContent="flex-end" spacing={1}>
            <Grid item>
              <ButtonComponent
                variant="outlined"
                onClick={() => navigate(route)}
              >
                Pre-Adverse Action
              </ButtonComponent>
            </Grid>
            <Grid item>
              <ButtonComponent
                variant="contained"
                sx={{ boxShadow: "none" }}
                onClick={props.setEngage}
              >
                Engage
              </ButtonComponent>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
