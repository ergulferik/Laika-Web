/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2C1810",
        secondary: "#D4A574",
        accent: "#E8B87D",
        background: "#FDF6E9",
        text: "#2C1810",
        darkBrown: "#250D07"
      },
      textShadow: {
        DEFAULT: '0 1px 2px rgba(0, 0, 0, 0.2)',
        sm: '0 1px 1px rgba(0, 0, 0, 0.2)',
        md: '0 2px 4px rgba(0, 0, 0, 0.2)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 