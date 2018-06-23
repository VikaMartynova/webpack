"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: __dirname +"/frontend",
    entry: {
        home: './home',
        about: './about'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
        library: "[name]"
    },
    watch: true,
    devtool: "source-map",
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
        ],
    optimization: {
        splitChunks:{
            name: 'vendor'
        }
    },
    module: {
        rules : [
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
            // ,
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    }
};