import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // ✅ Activa dark mode con clases
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [],
} satisfies Config;
