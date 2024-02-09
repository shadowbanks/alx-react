const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { title } = require("process");

module.exports = {
    entry: "./src/App/App.js",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Dashboard",
            template: "./dist/index.html"
        })
    ],
    devServer: {
        static: "./dist",
        hot: true,
        compress: true,
        open: true,
        port: 8564,
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        ouputPath: "imgs"
                    }
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ],
    },
}