import { Box, Dialog, Stack, styled, TextField } from "@mui/material";
import { useState } from "react";
import { ButtonComponent } from "../../atoms/button";
import Icon from "../../atoms/Icon";
import exportIcon from "../../../../public/images/export.svg";
import { TypographyComponent } from "../../atoms/typography";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { theme } from "../../../themes/theme";

const Modal = styled(Dialog)`
  & .MuiPaper-root {
    width: 945px;
    border-radius: 8px;
    height: 370px;
  }
`;

const Export = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const today = new Date();

  const handleClick = () => {
    setModalOpen(!modalOpen);
    setEndDate(null);
    setFromDate(null);
    setTimeout(() => {
      setModalOpen(false);
      setOpen(false);
    }, 3500);
  };

  return (
    <Box data-testid="export">
      <ButtonComponent
        variant="outlined"
        startIcon={<Icon src={exportIcon} alt="Export icon" />}
        onClick={() => setOpen(!open)}
      >
        Export
      </ButtonComponent>
      <Modal open={open} data-testid="modal" onClose={() => setOpen(!open)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
            <TypographyComponent
              variant="subtitle1"
              sx={{ padding: "3%" }}
              data-testid="subtitle1"
            >
              Export Candidate Reports CSV
            </TypographyComponent>
            <Box
              sx={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }}
            />
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5% 3%",
                paddingBottom: "23%",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TypographyComponent variant="body2" data-testid="body2">
                  Reports From
                </TypographyComponent>
                <DatePicker
                  label="From Date"
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      sx={{
                        borderRadius: "4px",
                        height: "36px",
                        width: "270px",
                      }}
                    />
                  )}
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  maxDate={today}
                />
              </Box>
              <Box
                sx={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <TypographyComponent variant="body2" data-testid="body2">
                  Reports To
                </TypographyComponent>
                <DatePicker
                  label="To Date"
                  renderInput={(params: any) => <TextField {...params} />}
                  value={endDate}
                  onChange={(newValue) => {
                    if (fromDate) setEndDate(newValue);
                  }}
                  minDate={fromDate}
                  maxDate={today}
                />
              </Box>
            </Stack>
            <Box
              sx={{ flex: 1, height: "1px", backgroundColor: "lightgrey" }}
            />
            <Box
              sx={{
                padding: "10px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <ButtonComponent
                variant="contained"
                disabled={fromDate && endDate ? false : true}
                onClick={handleClick}
              >
                Export Report
              </ButtonComponent>
              <div id={modalOpen ? "open" : "close"} data-testid="sub-modal">
                <Modal open={modalOpen} data-testid="modal2">
                  <Box sx={{ padding: "10px" }}>
                    <img
                      src="images/success.gif"
                      alt="Success icon"
                      style={{
                        width: "50%",
                        padding: "0 25%",
                        paddingTop: "4%",
                      }}
                    />
                    <TypographyComponent
                      variant="h2"
                      sx={{
                        color: theme.palette.textColor.highEmphasis,
                        padding: "0 11.5%",
                      }}
                    >
                      Download link was sucessfully sent to your email
                    </TypographyComponent>
                  </Box>
                </Modal>
              </div>
            </Box>
          </Box>
        </LocalizationProvider>
      </Modal>
    </Box>
  );
};

export default Export;
