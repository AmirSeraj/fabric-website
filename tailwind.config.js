/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/theme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|tabs|input|tooltip).js'  
  ],
  theme: {
    extend: {
      width: {
        1024: "1024px",
      },
      height: {
        768: "768px",
      },
    },
  },
  plugins: [nextui()],
};
