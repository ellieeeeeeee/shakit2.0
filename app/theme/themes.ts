"use client";

import { createTheme } from "@mui/material/styles";
import { create } from "domain";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
const theme = createTheme({});
