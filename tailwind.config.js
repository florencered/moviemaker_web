/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1000: "1000",
      },
      width: {
        120: "30rem",
      },
      colors: {
        domainb: "#b1991e",
      },
    },
  },
  plugins: [],
};
