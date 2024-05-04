const plugin = require("tailwindcss/plugin")

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#AB23FF",
          secondary: "#9123FF",
        },
        blue: {
          DEFAULT: "#3D8BFF",
          44: "rgba(61, 139, 255, 0.44)",
        },
        grey: {
          line: "#13171D",
        },
      },
      fontSize: {
        xs: [
          "0.625rem",
          {
            lineHeight: "0.6875rem",
          },
        ],
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
        monumentextended: ["var(--font-monument-extended)"],
      },
      spacing: {
        "100vh": "100vh",
        "200vh": "200vh",
        "300vh": "300vh",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        "bg-gradient": (angle) => ({
          "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
        }),
      })
    }),
  ],
}
export default config
