/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  variants: {
    imageRendering: ['responsive'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(), // no options to configure
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
  ],
}
