/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kite: ['Kite One', 'sans-serif'],
        abhaya: ['"Abhaya Libre"', 'serif'],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      animation: {
        'scroll': 'scroll 50s linear infinite',
        'scroll-reverse': 'scroll-reverse 50s linear infinite',
        'scroll-slow': 'scroll 50s linear infinite'
      }
    },
  },
  plugins: [],
};
