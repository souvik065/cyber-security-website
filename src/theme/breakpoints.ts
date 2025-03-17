import { BreakpointsOptions } from "@mui/material/styles";

// Extend MUI breakpoints to include XXL
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true; // ✅ Custom 'xxl' breakpoint
  }
}

// Define custom breakpoints
const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1536,
    xxl: 1920, // ✅ Added XXL breakpoint
  },
};

export default breakpoints;
