import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#1DB954", // Spotify Green
    },

    secondary: {
      main: "#00E5FF",
    },

    background: {
      default: "#000000",
      paper: "#0B0B0B",
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#9E9E9E",
    },

    divider: "#1A1A1A",
  },

  shape: {
    borderRadius: 18,
  },

  typography: {
    fontFamily: "'Inter', 'Roboto', sans-serif",

    h4: {
      fontWeight: 700,
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0B0B0B",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#0B0B0B",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#000000",
          borderBottom: "1px solid #151515",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        contained: {
          background: "linear-gradient(90deg,#1DB954,#27d86c)",
          color: "#000",
          fontWeight: 700,

          "&:hover": {
            background: "linear-gradient(90deg,#20c65d,#2fe276)",
          },
        },
      },
    },

    MuiSlider: {
      styleOverrides: {
        thumb: {
          width: 14,
          height: 14,
        },
      },
    },
  },
});

export default theme;
