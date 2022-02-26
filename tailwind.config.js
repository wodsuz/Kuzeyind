module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#D0F0C0",
        white: "#ffffff",
        dark: {
          DEFAULT: "#121212",
          100: "#0E131F",
          200: "#404040",
          300: "#282828",
          500: "#b3b3b3",
          700: "#202125",
        },
      },
    },
  },
  plugins: [],
};
