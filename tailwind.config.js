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
        softBlink: {
          "0%, 100%": { opacity: "0.25", transform: "scale(0.95)" },
          "50%": { opacity: "0.8", transform: "scale(1.05) rotate(12deg)" },
        },
      },
      animation: {
        softBlink: "softBlink 2.2s infinite",
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