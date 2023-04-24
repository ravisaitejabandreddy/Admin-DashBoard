import { Grid, Box, Card, IconButton, InputAdornment } from "@mui/material";
import Icon from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/typography";
import eye from "../../../../public/images/eye.svg";
import visible from "../../../../public/images/visible.svg";
import google from "../../../../public/images/google.svg";
import github from "../../../../public/images/github.svg";
import CheckBox from "../../atoms/Checkbox";
import { ButtonComponent } from "../../atoms/button";
import { useState } from "react";
import {
  regEmail,
  regPassword,
  TextComponent,
  StyledButtonComponent,
  StyledInput,
  style,
} from "../../../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../authentication";

interface SigninProps {
  checkboxLabel?: string;
  forgotButton?: string;
  signinButton?: string;
}

const Signin = ({ ...props }: SigninProps) => {
  const [signinEmail, setSigninEmail] = useState("");
  const [signinPassword, setSigninPassword] = useState("");
  const [type, setType] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/candidateList";
  const handleClick = () => {
    if (regEmail.test(signinEmail) && !regPassword.test(signinPassword)) {
      localStorage.setItem("email", signinEmail);
      localStorage.setItem("password", signinPassword);
      auth.login();
      navigate(redirectPath, { replace: true });
      global.alert("User loggedin successfully");
    } else global.alert("Invalid user");
  };
  return (
    <Card
      sx={{
        width: "380px",
        height: "570px",
        borderRadius: "6px",
        padding: "30px",
        marginTop: "4%",
        marginLeft: "30%",
      }}
      data-testid="signin"
    >
      <TypographyComponent variant="h1">Sign in</TypographyComponent>
      <TypographyComponent variant="body2" sx={{ padding: "10px 0" }}>
        Please enter your login credentials
      </TypographyComponent>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", padding: "5px 0" }}
        >
          <TypographyComponent variant='caption2' sx={{ margin: "2.5% 0" }}>
            Email
          </TypographyComponent>
          <StyledInput
            placeholder='Enter Email Address'
            value={signinEmail}
            type='email'
            onChange={(e) => setSigninEmail(e.target.value)}
            sx={style}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", padding: "5px 0" }}
        >
          <TypographyComponent variant='caption2' sx={{ margin: "2.5% 0" }}>
            Password
          </TypographyComponent>
          <StyledInput
            placeholder='Enter Password'
            type={type ? "text" : "password"}
            value={signinPassword}
            id='password'
            onChange={(e) => {
              setSigninPassword(e.target.value);
            }}
            sx={style}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton onClick={() => setType(!type)}>
                  <Icon
                    alt='hidden icon'
                    src={type ? visible : eye}
                    style={{ cursor: "pointer" }}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <Grid container direction='row'>
        <Grid item xs={6} maxWidth='200px'>
          <CheckBox
            label={
              <TypographyComponent variant='body2'>
                {props.checkboxLabel}
              </TypographyComponent>
            }
          />
        </Grid>
        <Grid item xs={6} maxWidth='180px'>
          <ButtonComponent
            variant='text'
            onClick={() => navigate("/forgot")}
            sx={{ marginTop: "2.5%" }}
          >
            <TypographyComponent variant='body1'>
              {props.forgotButton}
            </TypographyComponent>
          </ButtonComponent>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ButtonComponent
          variant='contained'
          fullWidth
          sx={{ margin: "3% 0", padding: "1.5% 0" }}
          disabled={signinEmail && signinPassword ? false : true}
          onClick={handleClick}
        >
          {props.signinButton}
        </ButtonComponent>
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
        <Box>
          <TypographyComponent
            variant="body2"
            sx={{ width: "40px", textAlign: "center" }}
          >
            or
          </TypographyComponent>
        </Box>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }} />
      </Box>
      <Grid item xs={12} maxHeight='80px'>
        <ButtonComponent
          variant='outlined'
          sx={{ margin: "4% 0", height: "7%" }}
          fullWidth
          startIcon={<Icon src={google} alt='Google icon' />}
        >
          Sign in with Google
        </ButtonComponent>
      </Grid>
      <Grid item xs={12} maxHeight='80px'>
        <ButtonComponent
          variant='outlined'
          fullWidth
          startIcon={<Icon src={github} alt='Github icon' />}
          sx={{ height: "7%" }}
        >
          Sign in with GitHub
        </ButtonComponent>
      </Grid>
      <Grid
        container
        md={9}
        sx={{ marginLeft: "20%", padding: "3% 0" }}
        direction='row'
      >
        <Grid item>
          <TextComponent variant='body1'>Don't have an account?</TextComponent>
        </Grid>
        <Grid item>
          <StyledButtonComponent onClick={() => navigate("/signup")}>
            <TypographyComponent variant='body1'>Sign up</TypographyComponent>
          </StyledButtonComponent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Signin;
