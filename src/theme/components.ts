import { Components, Theme } from "@mui/material/styles";

const components: Components<Omit<Theme, "components">> = {
    MuiCard: {
        styleOverrides: {
            root: {
                backgroundColor: 'transparent',
                boxShadow: 'none',
                backgroundImage: 'none',
            },
        },
    },
    MuiAccordion: {
        defaultProps: {
            elevation: 0, // ✅ Correct way to set elevation globally
        },
        styleOverrides: {
          root: {
            boxShadow: "none !important",
            "&.Mui-expanded": {
                boxShadow: "none !important",
            },
        },
        },
    },
    MuiAccordionDetails: {
        styleOverrides: {
            root: {
                boxShadow: "none",
                backgroundColor: "transparent",
            },
        },
    },
    MuiPaper: { 
      defaultProps: {
        elevation: 0, // ✅ Set elevation to 0
    },
      styleOverrides: {
          root: {
              boxShadow: "none !important", // ✅ Override if MUI Paper is causing shadow
              backgroundColor: "transparent !important",
          },
      },
  },
};

export default components;
