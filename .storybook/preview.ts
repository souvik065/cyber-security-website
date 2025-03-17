import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark", // Set dark mode as the default
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#010101" }, // Custom dark mode background
        { name: "customDark", value: "#121212" }, // Another dark theme option
      ],
    },
    darkMode: {
      current: "dark", // Default mode
      dark: { background: "#010101", appBg: "#121212" }, // Custom dark mode background
      light: { background: "#ffffff", appBg: "#ffffff" }, // Light mode background
    },
  },
};

export default preview;
