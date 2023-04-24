import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TypographyComponent } from "../../atoms/typography";
import { UserInfo, UserInfoProps } from "../userInfo";
import { theme } from "../../../themes/theme";
export interface UserDetailsProps {
  headText: string;
  details: UserInfoProps[];
}
export const CandidateInfo = ({ details, headText }: UserDetailsProps) => {
  const StyledAccordion = styled(Accordion)`
    & .Mui-expanded.MuiAccordionSummary-root {
      border-bottom: 1px solid ${theme.palette.icon.stroke};
      margin-bottom: 10px;
    }
  `;
  return (
    <div data-testid="candidateDetails">
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <TypographyComponent variant="subtitle1">
            {headText}
          </TypographyComponent>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={2.5} columns={{ xs: 4, sm: 8, md: 12 }}>
            {details.map((item) => (
              <Grid item xs={4} key={item.property}>
                <UserInfo
                  icon={item.icon}
                  property={item.property}
                  value={item.value}
                />
              </Grid>
            ))}
          </Grid>
        </AccordionDetails>
      </StyledAccordion>
    </div>
  );
};
