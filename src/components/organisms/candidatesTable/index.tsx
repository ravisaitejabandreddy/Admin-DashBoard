import { GridColDef } from "@mui/x-data-grid";
import { StyledTable } from "./index.styles";
interface CandidatesTableProps {
  header: GridColDef[];
  candidates: {}[];
}
export const CandidatesTable = ({
  candidates,
  header,
}: CandidatesTableProps) => {
  return (
    <div data-testid="table">
      <StyledTable
        columns={header}
        rows={candidates}
        autoHeight={true}
        disableColumnMenu
        disableSelectionOnClick
        headerHeight={42}
        rowHeight={48}
        hideFooter
        data-testid="grid-data"
        disableVirtualization
      />
    </div>
  );
};
