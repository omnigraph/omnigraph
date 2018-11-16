const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const extractCss = new CssExtractPlugin({
    filename: './dist/assets/app.css'
});

const commonConfig = require('./webpack.common');

const prodConfig = Object.assign({}, commonConfig, {

});

prodConfig.plugins.push(new UglifyPlugin({
    include: /\.tsx?$/,
    uglifyOptions: {
        ecma: 8,
        warnings: true,
        mangle: true,
        compress: {
            dropDebugger: true,
            deadCode: true,
        },
        output: {
            beautify: false,
        }
    },
}));

module.exports = prodConfig;