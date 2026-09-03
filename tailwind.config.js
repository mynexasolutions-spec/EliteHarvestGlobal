/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#16212c',
        muted: '#5d6976',
        line: '#dbe3ea',
        surface: '#ffffff',
        'surface-soft': '#f5f8f7',
        brand: '#0d6b57',
        'brand-dark': '#08483b',
        accent: '#c88a2d',
        footer: '#101820',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 18px 45px rgba(14, 31, 43, 0.12)',
        'card-hover': '0 24px 60px rgba(14, 31, 43, 0.15)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          sm: '2rem',
          lg: '2.5rem',
          xl: '3rem',
          '2xl': '4rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
}