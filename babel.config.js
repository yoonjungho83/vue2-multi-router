module.exports = {
  presets: [
    ['@babel/preset-env', { targets: "defaults" }]
    // '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}
