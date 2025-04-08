// tailwind.config.ts
import type { Config } from "tailwindcss"

// Importamos los plugins de Tailwind
import animatePlugin from "tailwindcss-animate"
import formsPlugin from "@tailwindcss/forms"
import typographyPlugin from "@tailwindcss/typography"

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/components/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/dist/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [
    animatePlugin,  
    formsPlugin,     
    typographyPlugin,
  ],
} satisfies Config
