/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
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
          DEFAULT: 'var(--emerald)'
        },
        'eire-black': 'var(--eire-black)',
        emerald: 'var(--emerald)',
        silver: 'var(--silver)',
        white: 'var(--white)',
        error: 'var(--error)',
        success: 'var(--success)',
        warning: 'var(--warning)'
      }
    }
  },
  plugins: []
}
