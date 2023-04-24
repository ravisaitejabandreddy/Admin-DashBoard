import { Box } from "@mui/material";
import Icon from "../../components/atoms/Icon";
import Login from "../../components/organisms/Login";

const ForgotPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "0 5%",
        justifyContent: "space-around",
      }}
      data-testid='forgot-password'
    >
      <Icon
        src='images/privacy.svg'
        alt='privacy icon'
        style={{ width: "25%", marginLeft: "7%" }}
      />
      <Login />
    </Box>
  );
};

export default ForgotPage;
