// tailwind.config.js
module.exports = {
  purge: ["{app,pages}/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, var(--tw-grid-auto-fit-min))'
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, var(--tw-grid-auto-fit-min))'
      }
    },
    colors: {
      black: '#282a36',
      white: '#f8f8f2',
      'blue-gray': '#6272a4',
      gray: '#44475a',
      'sky-blue': '#8be9fd',
      green: '#50fa7b',
      'dark-teal': 'rgb(33, 44, 61)',
      'neon-blue': 'rgb(17, 236, 229)',
      orange: '#ffb86c',
      pink: '#ff79c6',
      purple: '#bd93f9',
      red: '#ff5555',
      yellow: '#f1fa8c'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
