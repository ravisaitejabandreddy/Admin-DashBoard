import { Box, styled, Select, Pagination } from "@mui/material";
import { theme } from "../../../themes/theme";

export const StyledBox = styled(Box)({
  padding: "10px 12px",
  backgroundColor: "white",
});
export const StyledSelect = styled(Select)({
  [`& .MuiSelect-select`]: {
    paddingRight: "0px",
  },
});
export const StyledPage = styled(Pagination)({
  [`& .MuiPagination-ul .Mui-selected`]: {
    backgroundColor: theme.palette.primary.primary300,
    color: theme.palette.primary.main,
  },
  [`& .MuiPagination-ul .MuiPaginationItem-root`]: {
    [`&:hover`]: {
      backgroundColor: theme.palette.primary.primary300,
      color: theme.palette.primary.main,
    },
  },
});
