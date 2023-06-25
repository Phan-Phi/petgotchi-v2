import {
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { Palpito, ComicHelveticLight, createTypographyProperties } from "utils";

const TEXT_COLOR = "#431988";

const defaultTheme = createTheme();

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ComicHelveticLight.style.fontFamily,

    body1: {
      fontWeight: "300",

      [defaultTheme.breakpoints.up("xl")]: {
        fontSize: "clamp(1rem, 1.85vh, 20px)",
        lineHeight: "clamp(1rem, 2.22vh, 24px)",
      },
      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "clamp(1rem, 1.48vh, 16px)",
        lineHeight: "clamp(1rem, 2.22vh, 20px)",
      },
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "13px",
        lineHeight: "16px",
      },
    },
    h2: {
      fontFamily: Palpito.style.fontFamily,
      fontWeight: "400",

      fontSize: "clamp(1rem, 3.33vh, 36px)",
      lineHeight: "clamp(1rem, 3.33vh, 36px)",

      [defaultTheme.breakpoints.down("xl")]: {
        fontSize: "clamp(1rem, 2.96vh, 32px)",
        lineHeight: "clamp(1rem, 2.96vh, 32px)",
      },
      [defaultTheme.breakpoints.down("lg")]: {
        fontSize: "clamp(1rem, 2.59vh, 28px)",
        lineHeight: "clamp(1rem, 2.59vh, 28px)",
      },
      [defaultTheme.breakpoints.down(900)]: {
        fontSize: "clamp(1rem, 2.22vh, 24px)",
        lineHeight: "clamp(1rem, 2.22vh, 24px)",
      },
    },
  },
  palette: {
    primary: {
      main: "#42138E",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: TEXT_COLOR,
        },
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
