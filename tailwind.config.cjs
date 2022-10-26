/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1E1E1E',
        purple: {
          1000: '#44337A',
        },
      },
      fontFamily: {
        body: 'Roboto Mono, sans-serif',
        // eslint-disable-next-line quotes
        heading: 'Roboto Slab, sans-serif',
        sans: '"Roboto Mono"',
        serif: 'Roboto Mono',
        mono: 'Roboto Mono',
      },
    },
  },
  plugins: [],
};
