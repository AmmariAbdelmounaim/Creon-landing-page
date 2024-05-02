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
        purple: {
          DEFAULT: "#AB23FF",
          secondary: "#9123FF",
        },
        blue: "#3D8BFF",
        grey: {
          line: "#13171D",
        },
      },
      fontSize: {
        sm: [
          "1.125rem",
          {
            lineHeight: "1.2375rem",
          },
        ],
        md: [
          "1.375rem",
          {
            lineHeight: "1.7875rem",
          },
        ],
        lg: [
          "2.375rem",
          {
            lineHeight: "2.85rem",
          },
        ],
        xl: [
          "4.25rem",
          {
            lineHeight: "4.675rem",
          },
        ],
      },
      fontFamily: {
        satoshi: ["var(--font-satoshi)"],
        monument_extended: ["var(--font-monument-extended)"],
      },
    },
  },
  plugins: [],
};
export default config;
