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
      colo1: "#023535",
      colo2: "#015958",
      colo3: "#008F8C",
      colo4: "#0CABA8",
      colo5: "#0FC2C0",
      coll6: "#32A89C"
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin", "tw-elements/dist/plugin")],
};
