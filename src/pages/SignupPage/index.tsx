import { Box } from "@mui/material";
import Icon from "../../components/atoms/Icon";
import Signup from "../../components/organisms/Signup";

const SignupPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "0 5%",
        justifyContent: "space-around",
      }}
      data-testid='signup-page'
    >
      <Icon
        src='images/privacy.svg'
        alt='privacy icon'
        style={{ width: "25%", marginLeft: "7%" }}
      />
      <Signup />
    </Box>
  );
};

export default SignupPage;
