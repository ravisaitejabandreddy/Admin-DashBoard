import { Dialog, Box, styled } from "@mui/material";
import { useState } from "react";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";
import logout from "../../../../public/images/logout.svg";
import Icon from "../../atoms/Icon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../authentication";

const Modal = styled(Dialog)`
  & .MuiPaper-root {
    width: 400px;
    border-radius: 8px;
    padding: 20px;
  }
`;

const Logout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleChange = () => {
    setOpen(!open);
  };
  const auth = useAuth();
  return (
    <Box>
      <ButtonComponent
        onClick={handleChange}
        startIcon={
          <Icon
            alt="Logout Icon"
            src={logout}
            style={{
              marginTop: "8px",
            }}
          />
        }
        variant="text"
      />
      <Modal open={open} data-testid="modal" onClose={() => setOpen(!open)}>
        <TypographyComponent variant="subtitle1" data-testid="subtitle1">
          Confirm Logout
        </TypographyComponent>
        <TypographyComponent
          variant="body2"
          data-testid="body2"
          sx={{ marginTop: "3%", marginBottom: "5%" }}
        >
          Are you sure you want to logout?
        </TypographyComponent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "13px" }}>
          <ButtonComponent variant="outlined" onClick={handleChange}>
            Cancel
          </ButtonComponent>
          <ButtonComponent
            variant="contained"
            onClick={() => {
              setOpen(!open);
              global.localStorage.removeItem("email");
              global.localStorage.removeItem("password");
              auth.logout();
              navigate("/");
            }}
          >
            Logout
          </ButtonComponent>
        </Box>
      </Modal>
    </Box>
  );
};

export default Logout;
