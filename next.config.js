/** @type {import('next').NextConfig} */
// const nextConfig = {}

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {    
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'MfeNext',
          remotes: {
          //   MfeReact: `MfeReact@http://localhost:3001/remoteEntry.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './MfeNext': './src/app/page',
          },
          shared: {},
        })
      );
    }

    return config;
  },
};