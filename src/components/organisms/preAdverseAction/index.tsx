import { Card, Grid, styled } from "@mui/material";
import { useState, useEffect } from "react";
import { AdverseFooter } from "../adverseFooter";
import { AdverseProperties } from "../../molecules/adverseProperties";
import { CheckboxGroup } from "../../molecules/checkboxGroup";
import { StyledHr, StyledTypography, StyledCardContent } from "./index.styles";
import { TypographyComponent } from "../../atoms/typography";
import { theme } from "../../../themes/theme";
interface PreAdverseActionProps {
  fromEmail: string | null;
  toEmail: string;
  name: string;
}
const StyledCard = styled(Card)({
  borderRadius: "12px",
});
export const PreAdverseAction = ({
  fromEmail,
  toEmail,
  name,
}: PreAdverseActionProps) => {
  const [charges, setCharges] = useState<string[]>([]);
  const [status, setStatus] = useState(true);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = charges.indexOf(e.target.value);
    if (index === -1) {
      setCharges([...charges, e.target.value]);
    } else {
      setCharges(charges.filter((row) => row !== e.target.value));
    }
  };
  useEffect(() => {
    if (charges.length > 0) setStatus(false);
    else setStatus(true);
  });
  return (
    <div data-testid="actionNotice">
      <StyledCard>
        <StyledCardContent>
          <AdverseProperties property="From" value={fromEmail} />
        </StyledCardContent>
        <StyledHr />
        <StyledCardContent>
          <AdverseProperties property="To" value={toEmail} />
        </StyledCardContent>
        <StyledHr />
        <StyledCardContent>
          <AdverseProperties
            property="subject"
            value="Pre-adverse action notice - checkr-bpo"
          />
        </StyledCardContent>
        <StyledHr />
        <StyledCardContent>
          <Grid container direction="column" spacing={3}>
            <Grid container item spacing={1.4} direction="column">
              <Grid item>
                <StyledTypography variant="body2">
                  Dear {name},
                </StyledTypography>
              </Grid>
              <Grid container item>
                <Grid item xs={9.5}>
                  <StyledTypography variant="body2">
                    You recently authorized checkr-bpo (“the company”) to obtain
                    consumer reports and/or invistigate consumer reportsabout
                    you from a consumer reporting agency. The Company is
                    considering taking action in whole or in past on information
                    in such report(s) including the following specific items
                    identified in the report prepared by Checkr, Inc.
                  </StyledTypography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TypographyComponent
                variant="caption"
                sx={{ fontWeight: "bold" }}
              >
                Select the charges for the pre adverse action
              </TypographyComponent>
              <CheckboxGroup
                items={[
                  {
                    label: "Driving while license suspended",
                    value: "Driving while license suspended",
                  },
                  {
                    label: "Assault Domestic Violence",
                    value: "Assault Domestic Violence",
                  },
                  {
                    label:
                      "Unable to verify employment history at Dunder Mifflin",
                    value:
                      "Unable to verify employment history at Dunder Mifflin",
                  },
                ]}
                onChange={onChange}
                typographyStyle={{
                  color: theme.palette.textColor.mediumEmphasis,
                }}
              />
            </Grid>
            <Grid container item direction="column" spacing={2}>
              <Grid container item>
                <Grid item xs={8}>
                  <StyledTypography variant="caption2">
                    If you wish to dispute the accuracy of the information in
                    the report directly with the consumer reporting agency
                    (i.e., the source of the informationcontained in the
                    report), you should contact the agency identifield above
                    directly.
                  </StyledTypography>
                </Grid>
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
          </Grid>
        </StyledCardContent>
        <StyledHr
          style={{
            marginTop: "22px",
          }}
        />
        <StyledCardContent>
          <AdverseFooter days={7} result={status} charges={charges} toEmail={toEmail}/>
        </StyledCardContent>
      </StyledCard>
    </div>
  );
};
