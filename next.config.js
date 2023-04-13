module.exports = {
  webpack: (config, { isServer }) => {
    // Add the file-loader rule for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'pdfs/'
          }
        }
      ]
    })

    // Return the updated config
    return config
  },
  reactStrictMode: true,
  swcMinify: true
}
