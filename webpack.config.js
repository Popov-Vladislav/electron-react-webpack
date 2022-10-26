const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: './app.tsx',
	},
	output: {
		filename: '[name].[contenthash:8].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Learn Electron',
			template: 'index.html',
			inject: 'body',
		}),
		new CleanWebpackPlugin(),
		new ForkTsCheckerWebpackPlugin(),
		new MiniCssExtractPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
};
