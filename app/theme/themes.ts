"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#D82F58",
    },
    secondary: {
      dark: "#999",
      main: "#121212",
      light: "#B8B8B8",
    },
    background: {
      default: "#fff",
      paper: "#f8f8f8",
    },
    divider: "#EBEBEB",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1068,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 10,
          fontFamily: "Pretendard",
          fontWeight: 400,
          height: "100%",
        },
        body: {
          fontFamily: "Pretendard",
          height: "100%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Pretendard",
        },
        h1: {
          fontSize: "2.4rem",
          lineHeight: "2.9rem",
        },
        h2: {
          fontSize: "1.8rem",
          lineHeight: "2.2rem",
        },
        h3: {
          fontSize: "1.7rem",
          lineHeight: "2rem",
        },
        h4: {
          fontSize: "1.5rem",
          lineHeight: "1.8rem",
        },
        h5: {
          fontSize: "1.4rem",
          lineHeight: "1.7rem",
        },
        subtitle1: {
          fontSize: "1.3rem",
          lineHeight: "1.5rem",
        },
        subtitle2: {
          fontSize: "1.2rem",
          lineHeight: "1.4rem",
        },
        body1: {
          fontSize: "1.1rem",
          lineHeight: "1.3rem",
        },
        body2: {
          fontSize: "1rem",
          lineHeight: "1.2rem",
        },
        inherit: {
          fontSize: "1.4rem",
        },
      },
    },
  },
});
