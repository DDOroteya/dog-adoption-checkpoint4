/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#DBA39A",
        brown: "#7D5A5A",
        light: "#FEFCF3",
        navbar: "#FAF7F7",
        violet: "#D3CEDF",
      },
    },
  },
  plugins: [],
};
