const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    devtool: 'source-map',
    //mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(less)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.tsx', '.ts', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }//,
    // devServer: {
    //     contentBase: path.join(__dirname, 'public/'),
    //     port: 3000,
    //     publicPath: 'http://localhost:3000/dist/',
    //     hotOnly: true
    // },
    // plugins: [new webpack.HotModuleReplacementPlugin()]
};