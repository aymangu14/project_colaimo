module.exports = {
    purge: {
      enabled: true,
      content: [
        '*.html',
        './resources/js/main.js'
      ]
    },
    theme: {
      extend: {
        inset: {
          '100': '100%',
        }
      },
    },
    variants: {},
    plugins: [],
  }