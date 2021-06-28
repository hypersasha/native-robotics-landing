const merge = require('webpack-merge');
const common = require('./webpack.config');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        allowedHosts: [
            '.ngrok.io',
            '.vk.com'
        ],
        host: '0.0.0.0',
        port: 10880,
        publicPath: '/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
});