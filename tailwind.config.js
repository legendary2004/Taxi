/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js", flowbite.content()],
  theme: {
    extend: {
      colors: {
        'white': 'white',
        'gray-100': 'rgb(243 244 246)',
        'gray-800': 'rgb(31 41 55)',
        'gray-900': 'rgb(17 24 39)',
        'yellow-300': 'rgb(253 224 71)'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tailwindcss-animate"),
    flowbite.plugin()
  ],
}

