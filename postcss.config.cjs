// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./index.html', './src/**/*.{js,ts,vue}'],
      theme: {
        extend: {},
      },
      plugins: [],
    },
    autoprefixer: {},
  },
}
