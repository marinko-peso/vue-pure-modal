module.exports = {
  banner: true,
  input: 'index.js',
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    extractCSS: false,
    moduleName: 'PureModal'
  },
  plugins: {
    vue: {
      css: true
    }
  },
  bundleNodeModules: ['style-inject', 'vue-runtime-helpers', 'rollup-plugin-vue']
};
