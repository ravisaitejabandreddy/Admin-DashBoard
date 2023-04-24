import { Box, Grid } from "@mui/material";
import { useAuth } from "../../../authentication";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
import { ActionNotice } from "../actionNotice";
interface AdverseFooterProps {
  days: number;
  result: boolean;
  charges: string[];
  toEmail: string;
}
export const AdverseFooter = ({
  days,
  result,
  charges,
  toEmail,
}: AdverseFooterProps) => {
  const auth = useAuth();
  return (
    <div data-testid="footer">
      <Grid container>
        <Grid container item xs={6}>
          <Grid container item alignItems="center">
            <Grid item>
              <TypographyComponent variant="body2">
                Auto send post adverse action &nbsp;
              </TypographyComponent>
            </Grid>
            <Grid item>
              <Box
                width="64px"
                height="36px"
                sx={{
                  border: "1px solid " + theme.palette.icon.stroke,
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TypographyComponent variant="body1">
                  {days}
                </TypographyComponent>
              </Box>
            </Grid>
            <Grid>
              <TypographyComponent variant="body2">
                &nbsp; days
              </TypographyComponent>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid
          container
          item
          xs={3}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item>
            <ActionNotice
              charges={charges}
              disable={result}
              fromEmail={auth.user}
              name="John"
              toEmail={toEmail}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
