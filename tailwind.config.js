module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    theme: {
      container: {
        center: true,
      },
    },
    extend: {},
  },
  plugins: [],
}
