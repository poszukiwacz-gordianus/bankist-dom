/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      screens: {
        xs: "23em",
        // => @media (min-width: 320px) { ... }

        sm: "34em",
        // => @media (min-width: 544px) { ... }

        md: "55em",
        // => @media (min-width: 880px) { ... }

        lg: "69em",
        // => @media (min-width: 1100px) { ... }

        xl: "82em",
        // => @media (min-width: 1312px) { ... }
      },
      colors: {
        primary: {
          50: "#F5FCF9",
          100: "#EDFAF5",
          200: "#D1F0E1",
          300: "#B7E8CE",
          400: "#89D6A4",
          500: "#5ec576",
          600: "#4CB061",
          700: "#359448",
          800: "#227531",
          900: "#14591F",
          950: "#08380F",
        },
        secondary: {
          50: "#FFFEF2",
          100: "#FFFCE6",
          200: "#FFF8BF",
          300: "#FFF199",
          400: "#FFE24F",
          500: "#ffcb03",
          600: "#E6B002",
          700: "#BF8602",
          800: "#996102",
          900: "#734300",
          950: "#4A2600",
        },
        tertiary: {
          50: "#FFF7FB",
          100: "#FFF0F7",
          200: "#FFD6E7",
          300: "#FFBDD3",
          400: "#FF8CA3",
          500: "#ff585f",
          600: "#E64951",
          700: "#BF3239",
          800: "#992024",
          900: "#731216",
          950: "#4A070A",
        },
      },
    },
  },
  plugins: [],
};
