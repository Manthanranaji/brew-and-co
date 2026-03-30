/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fadeInUp': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },   // ← must be 1
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.3s ease-out forwards',
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
}