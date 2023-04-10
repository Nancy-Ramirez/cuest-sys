/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
    "./node_modules/flowbite/**/*.js"
  ],

  theme: {
    colors: {
      colo1: "#023535",
      colo2: "#015958",
      colo3: "#008F8C",
      colo4: "#0CABA8",
      colo5: "#0FC2C0",
      coll6: "#32A89C",
      colo7: "#00ABBD",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
