import { Box, Card, Stack, styled } from "@mui/material";
import { ButtonComponent } from "../../atoms/button";
import { useState } from "react";
import Icon from "../../atoms/Icon";
import back from "../../../../public/images/back.svg";
import { TypographyComponent } from "../../atoms/typography";
import Resend from "../../molecules/Resend";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useNavigate } from "react-router-dom";

const StyledInputElement = styled(MuiOtpInput)`
  & .MuiTextField-root .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #e5e7ed;
  }
  & .MuiTextField-root .MuiOutlinedInput-root .MuiOutlinedInput-input {
    width: 80px;
    height: 12px;
  }
`;

export const validateChar = (newValue: string) => {
  return (newValue >= "0" && newValue <= "9") || newValue === "";
};

const Login = () => {
  const [otp, setOtp] = useState("");
  const [otpReceived, setOtpReceived] = useState("0123");
  const navigate = useNavigate();

  const handleChange = (value: string) => setOtp(value);

  const verifyOtp = () => {
    if (otpReceived === otp) {
      window.alert("Verified Successfully");
      navigate("/candidateList");
    } else {
      window.alert("Please enter correct OTP");
    }
  };

  return (
    <Card
      sx={{
        height: "652px",
        width: "480px",
        borderRadius: "6px",
        marginTop: "4%",
        marginLeft: "30%",
      }}
    >
      <Box
        sx={{
          margin: "0 8%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: "5px",
        }}
      >
        <ButtonComponent
          variant='text'
          onClick={() => navigate("/signin")}
          startIcon={
            <Icon
              src={back}
              alt='go back button'
              style={{
                color: "blue",
                filter: "brightness(0)",
              }}
            />
          }
          sx={{ width: "100px", paddingTop: "10px" }}
        >
          Go Back
        </ButtonComponent>
        <TypographyComponent variant='h1' sx={{ padding: "10px 0" }}>
          Please enter OTP
        </TypographyComponent>
        <TypographyComponent variant='body2' sx={{ padding: "10px 0" }}>
          OTP has been sent to email
        </TypographyComponent>
        <Stack sx={{ padding: "3.1% 0" }}>
          <StyledInputElement
            data-testid='otp-input'
            value={otp}
            onChange={handleChange}
            validateChar={validateChar}
          />
        </Stack>
        <ButtonComponent
          variant='contained'
          onClick={verifyOtp}
          disabled={otp.length === 4 ? false : true}
        >
          Continue
        </ButtonComponent>
        <Resend
          button='Resend OTP'
          message="Didn't receive the OTP?"
          resendOtp={() => setOtpReceived("0000")}
        />
      </Box>
    </Card>
  );
};

export default Login;
