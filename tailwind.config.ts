import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      "dark-blue": "#465e8a",
      "black": "#3e484e",
      "light-blue": "#f9fcff",
      "blue": "#d6e3ff"
    }
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")]
}

export default config