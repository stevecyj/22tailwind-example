/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#1fb6ff",
        tahiti: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
