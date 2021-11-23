module.exports = {
  purge: {
    content: [
      './layouts/**/*.html',
      './content/**/*.md',
      './node_modules/**/*.js'
    ],
    safelist:[]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      mono: ['Fira Code']
    },
  },
  variants: {},
  plugins: []
}
