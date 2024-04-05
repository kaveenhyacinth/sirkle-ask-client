/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './components/**/*.{js,vue,ts}',
    './features/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#27c060',
          50: '#f0fdf4',
          100: '#ddfbe7',
          200: '#bdf5d1',
          300: '#89ecad',
          400: '#4cd980',
          500: '#27c060',
          600: '#1a9f4c',
          700: '#187d3e',
          800: '#186335',
          900: '#16512d',
          950: '#062d16'
        },
        'eire-black': {
          DEFAULT: '#181818',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#181818'
        },
        silver: {
          DEFAULT: '#c2c2c2',
          50: '#f7f7f7',
          100: '#f0f0f0',
          200: '#e3e3e3',
          300: '#d1d1d1',
          400: '#c2c2c2',
          500: '#aaaaaa',
          600: '#969696',
          700: '#818181',
          800: '#6a6a6a',
          900: '#585858',
          950: '#333333'
        },
        'dodger-blue': {
          DEFAULT: '#4098fd',
          50: '#eef7ff',
          100: '#daedff',
          200: '#bde1ff',
          300: '#8fcfff',
          400: '#5ab2ff',
          500: '#4098fd',
          600: '#1e72f2',
          700: '#165cdf',
          800: '#194ab4',
          900: '#1a428e',
          950: '#152a56'
        },
        error: '#E2363F',
        success: '#5CD689',
        warning: '#EDB95E'
      }
    }
  },
  plugins: []
}
