const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.js',
    },
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        hot: true,
        compress: true,
        open: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jsx?)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'dashboard',
            template: path.resolve(__dirname, '../dist/index.html'),
        }),
    ],
};
