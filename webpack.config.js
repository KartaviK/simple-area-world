const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    entry: './index.js',
    context: path.join(__dirname, 'app'),
    devServer: {
        host: 'localhost',
        publicPath: ASSET_PATH,
        contentBase: "./app",
        watchContentBase: true,
        noInfo: false,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: 8080,
        stats: {
            colors: true
        }
    },
    output: {
        path: path.join(__dirname, "/"),
        publicPath: ASSET_PATH,
        filename: "bundle.js",
        chunkFilename: './[name].bundle.js'
    },
    resolve: {
        modules: [
            path.resolve('./app'),
            path.resolve('./node_modules'),
        ],
        alias: {
            '~': path.resolve('./app'),
        },
        extensions: ['.js', '.es6', '.jsx', '.ts', '.tsx',],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    "babel-loader",
                    "awesome-typescript-loader",
                ],
            },
            {
                test: /\.(js|jsx|es6)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./Templates/index.html",
        }),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules\/.*/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
};
