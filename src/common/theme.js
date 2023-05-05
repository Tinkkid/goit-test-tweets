import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#a282ed",
      main: "#5736a3",
      dark: "#002884",
      lightText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#a282ed",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

export default theme;
