/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

const nextConfig = {
    experimental: {
        granularChunks: true,
    },
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
        },
    },
    webpack(config) {
        config.devtool = 'eval-source-map';

        return config;
    },
};

module.exports = withCSS(withBundleAnalyzer(nextConfig));
