/** @type {import('tailwindcss').Config} */

import { tailwindCustomColors } from "./src/tailwind/colors";

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xsm: "375px",
      },
      colors: {
        brightBlue: tailwindCustomColors.brightBlue,
        lightTheme: tailwindCustomColors.lightTheme,
        darkTheme: tailwindCustomColors.darkTheme,
      },
    },
  },
  plugins: [],
};
