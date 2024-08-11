const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV || 'development',  // Switch mode based on environment
    entry: './src/script.ts',  // Entry point for your application
    output: {
        filename: 'bundle.js',  // Name of the output bundle
        path: path.resolve(__dirname, 'dist'),  // Output directory
        clean: true,  // Clean the output directory before each build
    },
    resolve: {
        extensions: ['.ts', '.js'],  // Extensions to resolve
    },
    module: {
        rules: [
            {
                test: /\.ts$/,  // Use ts-loader for TypeScript files
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,  // Use MiniCssExtractPlugin for CSS files
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.html$/,  // Use html-loader for HTML files
                use: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',  // HTML template
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',  // Name of the CSS file
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),  // Define environment variables
        }),
    ],
    devtool: 'source-map',  // Enable source maps for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),  // Serve content from the 'dist' directory
        },
        compress: true,  // Enable gzip compression
        port: 9000,  // Port for the dev server
    },
};
