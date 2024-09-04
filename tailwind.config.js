/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx}',

  ],
  theme: {
    extend: {
      height:{
        '100vh':'100vh'
      },
      width:{
        '5vw':'5vw',
        '10vw':'10vw',
        "30vw":"30vw"
      },
      margin:{
        "5vw":"5vw"
      },
      left:{
        "95-e":"95%"
      }

    },
  },
  plugins: [],
  darkMode:'class'
}

