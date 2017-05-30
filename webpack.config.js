const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'js/main.js'),
  output: {
        path: path.resolve(__dirname, 'web/assets'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules'),
            },
            {
                test: /\.less$/,
                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use: ['css-loader', 'less-loader']
                // })
                use: [
                    { loader: 'style-loader' },
                    { loader: "css-loader" },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin({
        //     filename: 'main.css',
        //     disabled: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'web'),
        compress: true,
        hot: true,
        open: true
    }
};
