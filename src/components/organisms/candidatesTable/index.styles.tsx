import { styled, Link, Chip } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { theme } from "../../../themes/theme";
import { TypographyComponent } from "../../atoms/typography";

export const StyledTable = styled(DataGrid)({
  width: "100%",
  [`& .MuiDataGrid-columnHeaders`]: {
    backgroundColor: theme.palette.icon.stroke,
    color: theme.palette.textColor.mediumEmphasis,
    textTransform: "uppercase",
    maxHeight: "42px",
  },
  [`& .MuiDataGrid-columnHeader--moving`]: {
    backgroundColor: theme.palette.icon.stroke,
  },
  [`& .MuiDataGrid-columnSeparator`]: {
    visibility: "hidden",
  },
});
interface LinkProps {
  value: string | undefined;
  check?: string;
  id?: string | number;
}
export const LinkText = ({ value, id }: LinkProps) => {
  return (
    <Link
      underline="none"
      href={"/candidate/" + id}
      data-testid="candidate-name"
    >
      <TypographyComponent variant="body2">{value}</TypographyComponent>
    </Link>
  );
};
export const ChipText = ({ value, check }: LinkProps) => {
  if (value === "")
    return <TypographyComponent variant="body2">-</TypographyComponent>;
  const res = value === check;
  const StyledChip = styled(Chip)({
    borderRadius: "4px",
    color: res ? theme.palette.accent.green : theme.palette.accent.yellow,
    backgroundColor: res
      ? theme.palette.accent.lightGreen
      : theme.palette.accent.lightYellow,
    textTransform: "uppercase",
  });
  return (
    <StyledChip
      label={<TypographyComponent variant="caption" children={value} />}
    />
  );
};
export const Columns: GridColDef[] = [
  {
    field: "name",
    flex: 1,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="name" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <LinkText value={params.value} id={params.id} />
    ),
    sortable: false,
  },
  {
    field: "adjudication",
    flex: 1,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="adjudication" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <ChipText value={params.value} check="engage" />
    ),
    sortable: false,
  },
  {
    field: "status",
    flex: 1,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="status" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <ChipText value={params.value} check="CLEAR" />
    ),
    sortable: false,
  },
  {
    field: "location",
    flex: 1,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="location" />
    ),
    sortable: false,
  },
  {
    field: "date",
    flex: 1,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="date" />
    ),
    sortable: false,
  },
];
export const CourtSearchHeader: GridColDef[] = [
  {
    field: "search",
    flex: 0.65,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="search" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <TypographyComponent
        variant="body1"
        children={params.value}
        sx={{ color: theme.palette.primary.main }}
      />
    ),
    sortable: false,
  },
  {
    field: "status",
    flex: 0.55,
    renderHeader: () => (
      <TypographyComponent variant="caption" children="status" />
    ),
    renderCell: (params: GridRenderCellParams<string>) => (
      <ChipText value={params.value} check="CLEAR" />
    ),
    sortable: false,
  },
  {
    field: "date",
    flex: 0.55,
    headerAlign: "right",
    renderHeader: () => (
      <TypographyComponent variant="caption" children="date" />
    ),
    align: "right",
    sortable: false,
  },
  {
    field: "",
    flex: 1,
    sortable: false,
  },
];
