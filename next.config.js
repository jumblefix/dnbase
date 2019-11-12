module.exports = {
    webpack(config) {
        // eslint-disable-next-line no-param-reassign
        config.devtool = 'eval-source-map';
        return config;
    },
};
