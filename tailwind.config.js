/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bdr: {
          DEFAULT: "#71717A",
        },
        bc: {
          DEFAULT: "#08088c",
          light: "#00eae4",
        },
      },
    },
  },
  plugins: [],
};
