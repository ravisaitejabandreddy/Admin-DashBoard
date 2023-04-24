import { Box } from "@mui/material";
import Icon from "../../components/atoms/Icon";
import Signin from "../../components/organisms/Signin";

const SigninPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "0 5%",
        justifyContent: "space-around",
      }}
      data-testid='signin-page'
    >
      <Icon
        src='images/privacy.svg'
        alt='privacy icon'
        style={{ width: "25%", marginLeft: "7%" }}
      />
      <Signin
        checkboxLabel='Remember me'
        forgotButton='Forgot password'
        signinButton='Sign in'
      />
    </Box>
  );
};

export default SigninPage;
