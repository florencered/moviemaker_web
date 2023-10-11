/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        10000: 10000,
      },
      width: {
        650: "650px",
        700: "700px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
