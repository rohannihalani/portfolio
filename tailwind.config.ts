import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        surface: "#ffffff",
        "surface-secondary": "#f7f7f5",
        ink: "#0f0f0f",
        "ink-secondary": "#6e6e6e",
        border: "#e8e8e4",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
