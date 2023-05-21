/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'slightly-desaturated-cyan': '#5FB4A2',
        'dark-blue': '#203A4C',
        'grayish-dark-blue': '#33323D',
        'very-light-gray': '#FAFAFA',
        'light-gray': '#EAEAEB',
        'bright-red': '#F43030',
      },
      fontFamily: {
        ibarra: ['Ibarra Real Nova', 'serif'],
        'public-sans': ['Public Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
