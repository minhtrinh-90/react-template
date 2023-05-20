module.exports = {
  content: ['./*.html', './src/**/*.css'],
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: {
          300: '#FFCC21',
          400: '#FF963C',
          500: '#EA6C00',
        },
        secondary: {
          300: '#8FE9D0',
        },
      },
    },
  },
};
