/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#69D1D3',
        secondary: '#3A2C39',
        accent: '#FFF4CE',
        light: '#f3f1fe',
        dark: '#1f2937',
        icon: '#8b64b8',
        d_primary: '#35797A',
        b_bg: '#E4F0FF',
        label: '#725af4',
        accent2: '#F0D4FF'
      }
    },
  },
  plugins: [],
} 