/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#C2185B',
          light: '#E91E8C',
        },
        accent: '#7B68EE',
        cta: '#FFD23F',
        highlight: '#AD1457',
        blush: '#FFF0F5',
        ink: '#3A0A22',
      },
      animation: {
        'float': 'floatY 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}