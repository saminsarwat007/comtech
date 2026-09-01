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
        paper: "var(--paper)",
        ink: "var(--ink)",
        brand: {
          blue: "var(--brand-blue)",
          red: "var(--brand-red)",
          yellow: "var(--brand-yellow)",
        },
        cmyk: {
          c: "var(--cyan)",
          m: "var(--magenta)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        bangla: ["var(--font-bangla)", "sans-serif"],
        "bangla-serif": ["var(--font-bangla-serif)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
