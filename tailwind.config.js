/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      zIndex: {
        10000: 10000,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
