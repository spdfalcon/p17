/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'lalezar':['lalezar'],
      'iransans':['iransans']
    },
    extend: {
      colors:{
        'primary-color': '#2bce56',
        'white-color': '#fff',
        'dark-color': '#464749'
      }
    },
  },
  plugins: [],
}

