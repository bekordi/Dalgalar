/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: "#bae6fd",
          DEFAULT: "#38bdf8",
          dark: "#0284c7"
        }
      },
      animation: {
        ripple: "ripple 0.8s linear"
      },
      keyframes: {
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.8' },
          '100%': { transform: 'scale(8)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
};