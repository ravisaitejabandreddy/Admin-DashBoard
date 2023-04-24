import { Grid } from "@mui/material";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";

interface ResendProps {
  resendOtp?: () => void;
  message?: string;
  button?: string;
}

const Resend = ({ ...props }: ResendProps) => {
  return (
    <Grid container direction='row' sx={{ margin: "0 15%" }}>
      <Grid item>
        <TypographyComponent
          data-testid='body'
          variant='body2'
          sx={{ padding: "10px 0" }}
        >
          {props.message}
        </TypographyComponent>
      </Grid>
      <Grid item>
        <ButtonComponent variant='text' onClick={props.resendOtp}>
          {props.button}
        </ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default Resend;
