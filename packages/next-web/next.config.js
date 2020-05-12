const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  env: {
    API_URL: "http://localhost:4000",
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = withPlugins([withCSS, { cssModules: true }], nextConfig);
