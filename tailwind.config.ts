import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          deep: "#087A45",
          fresh: "#2EAD65",
          light: "#E8F5E9",
          dark: "#055630",
          hover: "#066337",
        },
        accent: {
          DEFAULT: "#FFC83D",
          hover: "#E5B132",
          light: "#FFF8E7",
          dark: "#D99B00",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F6F8F6",
          muted: "#F0F4F1",
          border: "#E2E8E4",
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Hind Siliguri"', '"Noto Sans Bengali"', 'system-ui', 'sans-serif'],
        bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
