const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      colors: {
        custom: {
          50: '#f8fdf6',
          100: '#eaf2e5',
          200: '#d9ead7',
          300: '#c7e0c8',
          400: '#b4d2b0',
          500: '#94bf96',
          600: '#a17296',
          700: '#749769',
          800: '#5a8458',
          900: '#2d432b',
        },
      },
    },
  },
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        johkade: {
          padding: 3,
          borderRadius: 10,
          textTransform: 'uppercase',
          backgroundColor: '#ff0000',
        },
        'resize-repeat': {
          resizeMode: 'repeat',
        },
      });
    }),
  ],
};
