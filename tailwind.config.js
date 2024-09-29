/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        underlineSlide: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        squiggle: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'slide-underline': 'underlineSlide 0.5s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 3s infinite',
        'squiggle': 'squiggle 20s linear infinite',
      },
    },
  },
}