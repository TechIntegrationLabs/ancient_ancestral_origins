/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#4D342E',
          gold: '#B8860B',
          red: '#8B0000',
          gray: {
            dark: '#333333',
            light: '#AAAAAA',
          },
        },
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cinzel': ['Cinzel', 'serif'],
        'lora': ['Lora', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
