const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production', // 'development' or 'production
    entry: {
        'devtools/devtools': './src/devtools/devtools.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: './manifest.json', to: '.'},
                {from: './src/devtools/index.html', to: 'devtools'}
            ],
        }),
    ],
};