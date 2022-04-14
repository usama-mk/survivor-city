module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '3xl': '1800px',
        '4xl': '2236px',
        // => @media (min-width: 1536px) { ... }
      }
    },
 
  },
  plugins: [],
}
