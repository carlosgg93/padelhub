/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-0': '#13111C',
        'primary-100': '#1A1725',
        'primary-200': '#27212F',
        'primary-300': '#3A3244',
        'primary-400': '#4D4359',
        'primary-500': '#60546E',
        'primary-600': '#7A6F8A',
        'primary-700': '#A09BA7',
        'primary-800': '#C6C6C6',
        'primary-900': '#EDEDED',
      },
      spacing: {
        42: '10.5rem',
      },
      display: ['group-hover'],
    },
  },
  plugins: [],
};
