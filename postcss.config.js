/* eslint-disable */
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./pages/**/*.t{s,sx}', './src/components/**/*.t{s,sx}'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

const plugins = [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
]

module.exports = {
    plugins: process.env.NODE_ENV === 'production' ? [...plugins, purgecss] : plugins,
};
