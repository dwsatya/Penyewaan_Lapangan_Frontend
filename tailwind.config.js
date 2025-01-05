/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {Salsa : ['Salsa']},
      colors : {
        mainblue : '#376AAC',
        green1 : '#237159',
        green2 : '#27825F',
        green3 : '#468E78'
      }
    },
  },
  plugins: [],
}


