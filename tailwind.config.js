/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      montserrat : 'Montserrat'
    },

    extend: {
      colors: {
        'dark-bg-color': '#252B42',
        'primary-color': '#23A6F0',
        'second-text-color': '#737373',
        'text-color': '#252B42',
        'muted-color': '#BDBDBD',
        'blue-bg': '#8EC2F2',
        'input-bg': '#F9F9F9'

      },
      screens: {
        'mobile': '414px',
        'desktop': '1440px',

      }
      
    },
   
  },
  plugins: [],
}

