import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    dark: {
      light: string;
      main: string;
      info: string;
      time: string;
      button: string;
    };
  }

  interface PaletteOptions {
    dark?: {
      light?: string;
      main?: string;
      info?: string;
      time?: string;
      button?: string;
    };
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 520,
      md: 900,
      lg: 1140,
      xl: 1430,
    },
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
});
export default theme;
