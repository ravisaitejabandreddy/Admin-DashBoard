import { Box, Card, Grid, IconButton, InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { TypographyComponent } from "../../atoms/typography";
import eye from "../../../../public/images/eye.svg";
import visible from "../../../../public/images/visible.svg";
import Icon from "../../atoms/Icon";
import CheckBox from "../../atoms/Checkbox";
import { ButtonComponent } from "../../atoms/button";
import { useNavigate } from "react-router-dom";
import {
  regEmail,
  regPassword,
  TextComponent,
  StyledButtonComponent,
  StyledInput,
} from "../../../utils";
import { useAuth } from "../../../authentication";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordType, setPasswordType] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const handleClick = () => {
    if (
      password === confirmPassword &&
      regEmail.test(email) &&
      !regPassword.test(password)
    ) {
      global.alert("User registered with an account");
      global.localStorage.setItem("email", email);
      global.localStorage.setItem("password", password);
      auth.login();
      navigate("/candidateList");
    } else if (!regEmail.test(email))
      global.alert("Email must follow the validations");
    else if (regPassword.test(password))
      global.alert(
        "Password must contain atleast one Uppercase,Lowercase,Digit,Special Character and should contain atleast 8 characters"
      );
    else if (password !== confirmPassword)
      global.alert("Password should match with confirm password");
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
  };

  return (
    <Card
      sx={{
        width: "380px",
        height: "568px",
        borderRadius: "6px",
        padding: "30px",
        marginTop: "4%",
        marginLeft: "30%",
      }}
      data-testid="signup"
    >
      <TypographyComponent variant="h1">Sign up</TypographyComponent>
      <TypographyComponent variant="body2" sx={{ padding: "10px 0" }}>
        Please sign up to start exploring the platform
      </TypographyComponent>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "5px 0" }}>
        <TypographyComponent variant="caption2" sx={{ margin: "2.5% 0" }}>
          Email
        </TypographyComponent>
        <StyledInput
          placeholder="Enter Email Address"
          value={email}
          type="email"
          id="email"
          onChange={(e) => handleEmailChange(e)}
          sx={{
            borderRadius: "4px",
            height: "36px",
            width: "99%",
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "5px 0" }}>
        <TypographyComponent variant="caption2" sx={{ margin: "2.5% 0" }}>
          Password
        </TypographyComponent>
        <StyledInput
          placeholder="Enter Password"
          type={passwordType ? "text" : "password"}
          value={password}
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{
            borderRadius: "4px",
            height: "36px",
            width: "99%",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={() => setPasswordType(!passwordType)}>
                <Icon
                  alt="hidden icon"
                  src={passwordType ? visible : eye}
                  style={{ cursor: "pointer" }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", padding: "5px 0" }}>
        <TypographyComponent variant="caption2" sx={{ margin: "2.5% 0" }}>
          Confirm Password
        </TypographyComponent>
        <StyledInput
          placeholder="Confirm Password"
          value={confirmPassword}
          type={confirmPasswordType ? "text" : "password"}
          id="confirm-password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          sx={{
            borderRadius: "4px",
            height: "36px",
            width: "99%",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={() => setConfirmPasswordType(!confirmPasswordType)}
              >
                <Icon
                  alt="hidden icon"
                  src={confirmPasswordType ? visible : eye}
                  style={{ cursor: "pointer" }}
                />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
      <CheckBox
        label={
          <TypographyComponent variant="body2">
            I agree to the
            <ButtonComponent variant="text">Privacy Policy</ButtonComponent>
          </TypographyComponent>
        }
        sx={{ padding: "5px 0" }}
      ></CheckBox>
      <ButtonComponent
        variant="contained"
        disabled={email && password && confirmPassword ? false : true}
        fullWidth
        sx={{ margin: "8px 0", padding: "10px 0" }}
        onClick={handleClick}
      >
        Sign up
      </ButtonComponent>
      <Grid
        container
        sx={{ marginLeft: "20%", padding: "3% 0" }}
        direction='row'
      >
        <Grid item>
          <TextComponent variant='body1'>Already a member?</TextComponent>
        </Grid>
        <Grid item>
          <StyledButtonComponent onClick={() => navigate("/")}>
            <TypographyComponent variant='body1'>Sign in</TypographyComponent>
          </StyledButtonComponent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Signup;
