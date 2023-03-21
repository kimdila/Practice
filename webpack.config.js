const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isDevelopment = NODE_ENV === 'development';

module.exports = {
    mode: NODE_ENV,
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        historyApiFallback: {
            rewrites: [
                {
                    from: /\/info\/?.*/,
                    to: '/info.html',
                },
            ],
        },
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
    },
    entry: {
        main: './src/pages/main/index.js',
        info: './src/pages/info/info.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist',),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env',
                        ],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/templates/index.html',
            publicPath: '/',
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            filename: 'info.html',
            template: 'src/templates/info.html',
            publicPath: '/',
            chunks: ['info']
        })
    ].concat(isDevelopment ? [] : [new MiniCssExtractPlugin()]),
};
