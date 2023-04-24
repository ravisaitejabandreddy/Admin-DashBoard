import { Chip, styled } from "@mui/material";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";
import { LinkText } from "../candidatesTable/index.styles";
const AdverseChipText = styled(Chip)({
  borderRadius: "4px",
  color: theme.palette.accent.blue,
  backgroundColor: theme.palette.accent.lightBlue,
  textTransform: "uppercase",
});
export const AdverseTableHeader: GridColDef[] = [
  {
    field: "name",
    flex: 0.8,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="name" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <LinkText value={params.value} id={params.id} />
    ),
    sortable: false,
  },
  {
    field: "status",
    flex: 0.6,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="status" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <AdverseChipText
        label={
          <TypographyComponent variant="caption" children={params.value} />
        }
      />
    ),
    sortable: false,
  },
  {
    field: "preNoticeDate",
    flex: 0.8,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="pre notice date" />
    ),
    sortable: false,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "postNoticeDate",
    flex: 0.8,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="post notice date" />
    ),
    sortable: false,
    align: "right",
    headerAlign: "right",
  },
  {
    field: "",
    flex: 1,
    sortable: false,
  },
];
