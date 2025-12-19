import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        fg: "var(--color-fg)",
        surface: "var(--color-surface)",
        surfaceHover: "var(--color-surface-hover)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        accentHover: "var(--color-accent-hover)",
        primary: "var(--color-primary)",
        primaryHover: "var(--color-primary-hover)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        textMuted: "var(--color-text-muted)",
      },
      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
        "2xl": "var(--spacing-2xl)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cardHover: "var(--shadow-card-hover)",
        glow: "var(--shadow-glow)",
      },
    },
  },
  plugins: [],
};

export default config;
