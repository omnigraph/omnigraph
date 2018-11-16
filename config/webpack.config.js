const UglifyPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common');

const devConfig = Object.assign({}, commonConfig, {
    devServer: {
        stats: "normal",
        port: 3000,
        index: 'index.html',
        publicPath: '/',
        // compress: true,
        // contentBase: path.join(__dirname, "../dist"),
        overlay: true,
        historyApiFallback: {
            index: '/'
        }
    }
});
devConfig.plugins.push(new UglifyPlugin({
            include: /\.tsx?$/,
            uglifyOptions: {
                ecma: 8,
                warnings: true,
                mangle: false,
                compress: {
                    dropDebugger: false,
                    deadCode: false,
                },
                output: {
                    beautify: true,
                    width: 140,
                }
            },
        }));
module.exports = devConfig;