/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'MfeNext',
        remotes: {
        //   next1: `next1@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './MfeNext': './src/app/page',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};

import '@module-federation/nextjs-mf/src/include-defaults';