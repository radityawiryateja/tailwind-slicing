/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    './*.html','./**/*.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans : ["Plus Jakarta Sans", "sans-serif"]
    },
    colors: {
      main: {
        0: "white",
        1: "#E9E3FF",
        2: "#4318FF",
        3: "#68769F",
        4: "#1B2559",
        5: "#F6F8FD",
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
};