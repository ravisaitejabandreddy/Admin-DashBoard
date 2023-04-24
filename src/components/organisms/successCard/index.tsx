import { Dialog, Grid, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
import success from "../../../../public/images/success.gif";
interface SuccessCardProps {
  open: boolean;
  name: string;
}

const Modal = styled(Dialog)`
  & .MuiPaper-root {
    width: 945px;
    border-radius: 8px;
    height: 370px;
  }
`;
export const SuccessCard = ({ ...props }: SuccessCardProps) => {
  return (
    <div id={props.open ? "open" : "close"} data-testid="sub-modal">
      <Modal open={props.open} data-testid="modal2">
        <Grid
          container
          direction="column"
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <img
              src={success}
              alt="Success icon"
              style={{
                width: "300px",
              }}
            />
          </Grid>
          <Grid item>
            <TypographyComponent
              variant="h2"
              sx={{
                color: theme.palette.textColor.highEmphasis,
              }}
            >
              {props.name}
            </TypographyComponent>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};
