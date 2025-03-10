import type { Config } from "tailwindcss";

export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "banco-dark": "var(--color-background-dark)",
        "banco-light": "var(--color-background-light)",
        "foreground-dark": "var(--color-foreground-dark)",
        "foreground-light": "var(--color-foreground-light)",
        "border-dark": "var(--color-border-dark)",
        "border-light": "var(--color-border-light)",
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
