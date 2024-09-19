/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1238': '77375rem',
      },
      fontFamily: {
        h1:['Alegreya Sans SC', 'sans-serif'],
        p:['Alegreya', 'serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite', // Adjust the timing (2s) if you want a slower or faster spin
      },
    },
  },
  plugins: [],
}