// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        // Add your custom color here
        'main-bg': '#090E16',
        'sec-bg': '#0f1120',
        'sec-text': '#87888f'
      },
      animation: {
        navanimation: 'navIcon 1s infinite'
      },
      keyframs: {
        navIcon: {
          "0%": {
            transform: 'translateX(-10px)'
          },
          "100%": {
            transform: 'translateX(5px)'
          }
        }
      }
    },
  },
  plugins: [],
}
