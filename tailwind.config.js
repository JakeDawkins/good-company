/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '0px', // sm & up
      md: '480px', // md & up
      lg: '768px', // lg & up
    },
    extend: {
      colors: {
        darkGreen: '#37514D',
        darkRed: '#B6594C',
        terracotta: '#DD8E75',
        lightBlue: '#90AEB2',
      },
    },
  },
  plugins: [],
};
