export const designTokens = {
    colors: {
      primary: "#eb5d28",
      secondary: "#82ac5f",
      background: "#ffffff",
      foreground: "#11170d",
      muted: "#f1f1f1",
      mutedForeground: "#666666",
      border: "#e5e5e5",
      input: "#e5e5e5",
      ring: "#eb5d28",
      accent: "#82ac5f",
      destructive: "#ff0000",
      success: "#82ac5f",
    },
    radius: {
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      full: "9999px",
    },
    spacing: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
    },
    typography: {
      fontFamily: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        normal: "1.5",
        relaxed: "1.75",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
    transitions: {
      all: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
      colors:
        "background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
    },
    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
  } as const
  
  export type DesignTokens = typeof designTokens
  export default designTokens;
  
  