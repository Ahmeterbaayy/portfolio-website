/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          400: '#B7AAFF',
          600: '#4731D3',
          700: '#3730A3',
        },
        gray: {
          50: '#F9F9F9',
          200: '#AEBCCF',
          300: '#D1D5DB',
          400: '#6B7280',
          500: '#777777',
          600: '#3A3A3A',
          700: '#1F2937',
          800: '#252128',
          900: '#383838',
        },
        purple: {
          100: '#BAB2E7',
          300: '#E1E1FF',
        },
        pink: {
          600: '#DB2777',
        },
        yellow: {
          300: '#FFE86E',
        },
      },
      boxShadow: {
        'custom': '0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)',
      }
    },
  },
  plugins: [],
}
