const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');


module.exports = {
    mode: 'production', // 'development' or 'production
    entry: {
        'devtools/index': './src/devtools/index.ts',
        'devtools/panel': './src/devtools/panel.ts',
        'content-script/index': './src/content-script/index.ts',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.di.(yaml|yml|json)$/,
                use: require.resolve('@enhavo/dependency-injection/service-loader')
            },

        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.vue', '.yaml'
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {from: './manifest.json', to: '.'},
                {
                    from: 'src', to: '.', globOptions: {
                        ignore: ['**/*.ts', '**/*.vue'],
                        dot: true
                    }
                }
            ],
        }),
    ],
    devtool: false
};