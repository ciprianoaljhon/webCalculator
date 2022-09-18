/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.html, .css, .js}",
"/*{.html, .css, .js}"],
  theme: {
    extend: {
      'colors': {
        'dark-100' : 'hsla(0, 0%, 13%, 1)',
        'dark-200' : 'hsla(0, 0%, 5%, 1)',
        'dark-300' : 'hsla(0, 0%, 3%, 1)',
      },
    },
  },
  plugins: [],
}
