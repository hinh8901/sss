export const designTokens = {
  layout: {
    containerPadding: {
      mobile: "1rem", // 16px
      desktop: "2rem", // 32px
    },
  },
  colors: {
    brand: {
      primary: "#E92127",
      secondary: "#57733F",
      accent: "#AEE67F",
    },
    ui: {
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#666666",
      success: "#82AC5F",
      input: "#F8F8F8",
    },
    button: {
      primary: "#E92127",
      secondary: "#000000",
      action: "#AEE67F",
    },
    gradient: {
      hero: "linear-gradient(135deg, #57733F 0%, #AEE67F 100%)",
    },
  },
  typography: {
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.5rem", // 24px
      "2xl": "2rem", // 32px
      "3xl": "3rem", // 48px
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    lineHeight: {
      tight: "1.2",
      base: "1.5",
      relaxed: "1.75",
    },
  },
  spacing: {
    0: "0",
    1: "0.25rem", // 4px
    2: "0.5rem", // 8px
    3: "0.75rem", // 12px
    4: "1rem", // 16px
    5: "1.25rem", // 20px
    6: "1.5rem", // 24px
    8: "2rem", // 32px
    10: "2.5rem", // 40px
    12: "3rem", // 48px
  },
  radius: {
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
} as const

export type DesignTokens = typeof designTokens

