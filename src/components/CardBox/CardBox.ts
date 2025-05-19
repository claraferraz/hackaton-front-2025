import { Box, styled } from "@mui/material";

export const CardBox = styled(Box)(() => {
  return {
    display: "flex",
    height: "150px",
    width: "80%",
    backgroundColor: "#EEEEEE",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 15px",
  };
});

export const TextBox = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  };
});
