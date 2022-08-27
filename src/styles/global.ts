import { createTheme } from "@material-ui/core";

const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: "#162D59",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#F2F2F2",
    },
    info: {
      main: "#71D1FF",
    },
    success: {
      main: "#C5FF63",
    },
    warning: {
      main: "#FFE066",
    },
    error: {
      main: "#FF8484",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

export default GlobalTheme;
