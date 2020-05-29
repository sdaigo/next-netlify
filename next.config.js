module.exports = {
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })

    cfg.module.rules.push({
      test: /\.ya?ml$/,
      use: 'js-yaml-loader',
    })

    cfg.module.rules.push({
      test: /\.toml$/,
      use: [
        {
          loader: 'raw-loader',
          options: {
            esModule: false,
          },
        },
      ],
    })

    return cfg
  },
}
