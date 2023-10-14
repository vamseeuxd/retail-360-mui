import { Typography, styled } from "@mui/material";

export const PageHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "#000",
  borderBottom:
    theme.palette.mode === "dark" ? "1px solid #585858" : "1px solid #d7d7d7",
  textAlign: "center",
  padding: "8px 24px",
  display: "flex",
}));
