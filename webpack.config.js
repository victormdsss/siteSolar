const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssEstractPuglin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry: {
        index: './src/js/index.js',
        productdetails: './src/js/product-details.js',
        products: './src/js/products.js'
    },
    output:{
        filename: '[name].bundler.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
             {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssEstractPuglin.loader,
                    'css-loader',
                    'sass-loader'
                ]
             },
             {
                test: /\.js/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
             },
             {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset/resource'
             }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebPackPlugin({
            filename: 'product-details.html',
            template: './src/product-details.html'
        }),
        new HtmlWebPackPlugin({
            filename: 'products.html',
            template: './src/products.html'
        }),
        new MiniCssEstractPuglin({
            filename: 'style.css'
        }),
        new FaviconsWebpackPlugin('./src/assets/img/favicon.png')
    ],
    experiments: {
        topLevelAwait: true
      },
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    mode: 'development'
}