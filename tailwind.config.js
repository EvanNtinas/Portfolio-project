/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        light: "0 2px 4px rgba(0, 0, 0, 0.1)",
        dark: "0 4px 8px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        maroon: "#B2533E",
        customteal: "#186F65",
        customgreen: "#B5CB99",
        customyellow: "#FCE09B",
      },
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
