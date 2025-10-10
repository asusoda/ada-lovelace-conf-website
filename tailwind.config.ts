import type { Config } from "tailwindcss"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"], // adjust to your file paths
  theme: {
    extend: {
      colors: {
        white: "#f0f0f0",
        blue: "#2D4CE2",
        lilac: "#F4DBFE",
        darkpurple: "#A965EA",
      },

    },
  },
  plugins: [],
}

