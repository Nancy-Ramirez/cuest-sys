/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],

  theme: {
    colors: {
      col1: "#015958",
      col2: "#005A5B",
      col3: "#023535",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin", "tw-elements/dist/plugin")],
};
