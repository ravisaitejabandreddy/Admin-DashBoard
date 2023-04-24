import { DialogTitle, DialogContent, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CandidateService } from "../../../service/CandidateService";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";
import { ActionNote } from "../../molecules/actionNote";
import { AdverseProperties } from "../../molecules/adverseProperties";
import { NoticeAttachment } from "../../molecules/noticeAttachment";
import { NoticeHeader } from "../../molecules/noticeHeader";
import { SuccessCard } from "../successCard";
import { StyledDialog, StyledTypography, StyledUl } from "./index.styles";
interface ActionNoticeProps {
  charges: string[];
  fromEmail: string | null;
  toEmail: string;
  name: string;
  disable: boolean;
}
export const ActionNotice = ({
  charges,
  fromEmail,
  toEmail,
  name,
  disable,
}: ActionNoticeProps) => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    CandidateService.editData({ id, adjudication: "Adverse Action" });
    setOpen(false);
    setSuccess(!success);
    setTimeout(() => {
      setSuccess(false);
      navigate("/candidateList");
    }, 3500);
  };

  return (
    <div data-testid="notice" id={open ? "opened" : "closed"}>
      <ButtonComponent
        variant="contained"
        disabled={disable}
        onClick={handleClickOpen}
      >
        Preview Notice
      </ButtonComponent>
      <StyledDialog
        onClose={() => setOpen(!open)}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle data-testid="noticePopup">
          <NoticeHeader onClick={() => setOpen(!open)} />
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={2} columnSpacing={1.7} direction="column">
            <Grid container item spacing={1.5} direction="column">
              <Grid item>
                <AdverseProperties property="From" value={fromEmail} />
              </Grid>
              <Grid item>
                <AdverseProperties property="To" value={toEmail} />
              </Grid>
              <Grid item>
                <AdverseProperties
                  property="subject"
                  value="Pre-adverse action notice - checkr-bpo"
                />
              </Grid>
              <Grid item xs={6}>
                <ActionNote />
              </Grid>
            </Grid>
            <Grid container item direction="column" spacing={1.2}>
              <Grid item>
                <StyledTypography variant="caption2">
                  Dear {name}
                </StyledTypography>
              </Grid>
              <Grid item>
                <StyledTypography variant="caption2">
                  You recently authorized checkr-bpo (“the company”) to obtain
                  consumer reports and/or invistigate consumer reportsabout you
                  from a consumer reporting agency. The Company is considering
                  taking action in whole or in past on information in such
                  report(s) including the following specific items identified in
                  the report prepared by Checkr, Inc.
                </StyledTypography>
              </Grid>
              <Grid item>
                <StyledUl>
                  {charges.map((charge) => (
                    <li key={charge}>
                      <StyledTypography variant="caption2">
                        {charge}
                      </StyledTypography>
                    </li>
                  ))}
                </StyledUl>
              </Grid>
              <Grid container item direction="column" spacing={1}>
                <Grid item>
                  <StyledTypography variant="caption2">
                    If you wish to dispute the accuracy of the information in
                    the report directly with the consumer reporting agency
                    (i.e., the source of the informationcontained in the
                    report), you should contact the agency identifield above
                    directly.
                  </StyledTypography>
                </Grid>
                <Grid item>
                  <StyledTypography variant="caption2">
                    Sincerly,
                  </StyledTypography>
                  <br />
                  <StyledTypography variant="caption2">
                    Checkr-bpo
                  </StyledTypography>
                </Grid>
              </Grid>
              <Grid container item spacing={0.5} direction="column">
                <Grid item>
                  <TypographyComponent
                    variant="caption"
                    sx={{ fontWeight: "bold" }}
                  >
                    Attachments
                  </TypographyComponent>
                </Grid>
                <Grid item>
                  <NoticeAttachment value="Summary of right under the FCRA" />
                </Grid>
                <Grid item>
                  <NoticeAttachment value="Copy of background report" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent dividers>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <ButtonComponent variant="contained" onClick={handleClose}>
                Submit Notice
              </ButtonComponent>
            </Grid>
          </Grid>
        </DialogContent>
      </StyledDialog>
      <SuccessCard
        name="Pre-Advance Action notice successfully sent"
        open={success}
      />
    </div>
  );
};
