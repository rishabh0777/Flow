/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        afacad: ["Afacad Flux"]

      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      screens: {
        xsm: "320px", //for iphone 5
        sm: "640px", // for mobile
        md: "768px", // for tablet
        lg: "1024px", // for laptop
        xl: "1280px", // for desktop
        "2xl": "1536px", // for large desktop
      }
    },
  },
  plugins: [],
}

