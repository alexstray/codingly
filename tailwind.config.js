/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      colors: {
        primaryBlue: '#3498db',
        darkBlue: '#2979AF',
        lightGray: '#f9fafe',
        lightGrayVariant: '#E0E1E4',
        darkGray: '#333333',
        darkGrayHover: '#111111',
        primaryYellow: '#F1C40F',
        lightYellow: '#F8E187',
        successGreen: '#2ecc71',
        primaryGreen: '#29B765',
        errorRed: '#B70000',
        primaryOrange: '#DB7734',
        primaryPink: '#DE48A2',
      },
      fontFamily: {
        poppins: ['Poppins', 'Didact Gothic', 'Arial', 'sans-serif',]
      }
    },
  },
  plugins: [],
}
