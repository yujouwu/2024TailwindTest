const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.html', './layout/**/*.ejs', './main.js'],
  theme: {
    
    container: {
      center: true,
      padding: '24px',
    },
    extend: {
      colors: {
        primary: '#69F0AE',
        neutral: {
          0: '#FFFFFF',
          50: '#F5F6F6',
          100: '#E6E7E7',
          200: '#CFD2D1',
          300: '#AEB2B1',
          400: '#858B8A',
          500: '#6A706F',
          600: '#5A605F',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
          'surface': '#E7F9F4',
          'light': '#60D6B5',
          'main': '#11C291',
          'dark': '#0FB184',
        },
        brand: {
          50: '#FCFFE6',
          100: '#F7FEC9',
          200: '#E8FD7C',
          300: '#DDF95D',
          400: '#C9EF2C',
          500: '#A1E00F',
          600: '#71C109',
          700: '#3B8D09',
          800: '#1E6803',
          900: '#184D0C',
          950: '#023416',
        },
        error: {
          surface: '#E64C5A',
          light: '#FD5463',
          main: '#FD7682',
          dark: '#FFEEEF',
        },
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
};
