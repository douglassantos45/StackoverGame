/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121214',
        purple: {
          1000: '#44337A',
        },
      },
      backgroundImage: {
        backgroundChallenge: 'url("/challenge-lock.svg")',
        'nlw-gradient':
          'linear-gradient(83deg, #9572FC 28.08%, #43e7ad 67.94%, #e1d55d 44.57%)',
        'game-gradient':
          'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 67.08%)',
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
