/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(107.99deg, #FFCC97 -6.66%, #D5D9C5 94.52%)",
      },
      keyframes: {
        customScroll: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },

        },
      },
      animation: {
        customScroll: "customScroll 10s linear infinite",
      },
      colors: {
        "black-test": "#0E0E0E"
      }
    },
  },
  plugins: [],
};
