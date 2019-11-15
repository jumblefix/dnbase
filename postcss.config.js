/* eslint-disable */
const plugins =
    process.env.NODE_ENV === 'production'
        ? [
              require('postcss-easy-import'),
              require('tailwindcss'),
              require('@fullhuman/postcss-purgecss')({
                  content: ['./pages/**/*.t{s,sx}', './src/components/**/*.t{s,sx}'],
                  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
              }),
          ]
        : [require('postcss-easy-import'), require('tailwindcss')];

module.exports = {
    plugins: [...plugins, require('autoprefixer'), require('cssnano')],
};
