import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [],
} satisfies Config;

