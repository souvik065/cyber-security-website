import { PaletteMode } from "@mui/material";

const createColor = (main: string, light?: string) => ({
  light: light || main,
  main: main,
  dark: main,
  contrastText: "#fff",
});



declare module "@mui/material/styles" {
  interface Palette {
    customGrey: Palette["primary"];
    primaryBlue: Palette["primary"];
  }
  interface PaletteOptions {
    customGrey?: PaletteOptions["primary"];
    primaryBlue?: PaletteOptions["primary"];
    colorDisabled?: PaletteOptions["primary"];

  }
  
}

const getPalette = (mode: PaletteMode) => ({
  mode,
  primary: createColor(
    mode === "dark" ? "#010101" : "#212121", // Main
    mode === "dark" ? "#ffffff" : "#212121" // Light
  ),
  primaryBlue: createColor("#007BFF"),
  colorDisabled: createColor(
    mode === "dark" ? "#9C9C9C" : "#9C9C9C",
  ),
  borderColor: createColor(
    mode === "dark" ? "#212121" : "#e0e0e0", // Main
    mode === "dark" ? "#0C0C0C" : "#e0e0e0" // Light

  ),

  background: {
    default: mode === "dark" ? "#121212" : "#ffffff",
    paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
  },
  text: {
    primary: mode === "dark" ? "#ffffff" : "#212121",
    secondary: mode === "dark" ? "#bdbdbd" : "#616161",
  },
});

export default getPalette;
