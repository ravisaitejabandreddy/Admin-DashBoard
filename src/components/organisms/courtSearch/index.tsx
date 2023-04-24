import { Card, CardContent, styled } from "@mui/material";
import { TypographyComponent } from "../../atoms/typography";
import { CandidatesTable } from "../candidatesTable";
import { CourtSearchHeader } from "../candidatesTable/index.styles";
interface CourtSearchProps {
  data: {}[];
}
export const CourtSearch = ({ data }: CourtSearchProps) => {
  const StyledCardContent = styled(CardContent)({
    [`&.MuiCardContent-root:last-child`]: {
      paddingBottom: "16px",
    },
    padding: "16px",
  });
  return (
    <div data-testid="courtSearch">
      <Card sx={{ borderRadius: "8px" }}>
        <StyledCardContent sx={{ padding: "16px" }}>
          <TypographyComponent variant="subtitle1">
            Court Searches
          </TypographyComponent>
        </StyledCardContent>
        <CandidatesTable candidates={data} header={CourtSearchHeader} />
      </Card>
    </div>
  );
};
