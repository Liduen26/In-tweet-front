const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv            = require('dotenv-webpack');
const webpack 			= require('webpack');
const path              = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", 
                    "css-loader",   
                    "sass-loader"   
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
        new Dotenv()
    ],
    resolve: {
        alias: {
            "@styles"       : path.resolve(__dirname, "src/styles"),
            "@constants"    : path.resolve(__dirname, "src/constants"),
            "@hooks"        : path.resolve(__dirname, "src/hooks"),
            "@service"      : path.resolve(__dirname, "src/service"),
            "@utils"        : path.resolve(__dirname, "src/utils"),
            "@common"       : path.resolve(__dirname, "src/components/common"),
            "@generics"     : path.resolve(__dirname, "src/components/generics"),
            "@material"     : path.resolve(__dirname, "src/components/material"),
            "@pages"        : path.resolve(__dirname, "src/components/pages"),
            "@assets"       : path.resolve(__dirname, "src/assets"),
        }
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    devtool: "eval-source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
        publicPath: '/'
    },
};