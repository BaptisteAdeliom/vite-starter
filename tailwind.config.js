/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2.5rem",
        md: "2.25rem",
        lg: "2.75rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    fontSize: {
      'xs': ['0.75rem', '1.238rem'],
      'sm': ['0.875rem', '1.44rem'],
      base: ['1rem', '1.65rem'],
      lg: ['1.25rem', '1.813rem'],
      xl: ['1.5rem', '2.175rem'],
      '2xl': ['1.5rem', '1.8rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.7rem'],
      '5xl': ['3rem', '3.6rem'],
      '6xl': ['3.75rem', '4.5rem'],
      '7xl': ['5rem', '6rem'],
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#0A0A0A',
      danger: '#ED4B46',
      brand: {
        '01': {
          dark: '#',
          DEFAULT: '#',
          light: '#',
        },
        '02': {
          dark: '#',
          DEFAULT: '#',
          light: '#',
        },
        '03': {
          dark: '#',
          DEFAULT: '#',
          light: '#',
        },
      },
      gray: {
        900: '#1F1F1F',
        800: '#2C2C2D',
        700: '#303236',
        600: '#4B4D51',
        500: '#696B6D',
        400: '#87898D',
        300: '#CFD1D6',
        200: '#CFD1D6',
        100: '#E6E7EA',
        50: '#F9F9F9',
      },
    },
  },
  corePlugins: {
    float: false,
    clear: false,
  },
  plugins: [
    // Ajout de variants custom
    plugin(function ({ addVariant }) {
      addVariant('is-active', ['&.is-active', '.is-active &']);
      addVariant('keyboard', '.tab-active &');
    }),
  ],
}