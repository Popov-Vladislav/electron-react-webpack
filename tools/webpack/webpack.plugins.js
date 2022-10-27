const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { inDev, inWeb } = require('./webpack.helpers');

module.exports = [
	new ForkTsCheckerWebpackPlugin(),
	new webpack.DefinePlugin({
		'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
	}),
	inDev() && new webpack.HotModuleReplacementPlugin(),
	inDev() && new ReactRefreshWebpackPlugin(),
	inWeb() && new CleanWebpackPlugin(),
	inWeb() &&
		new HtmlWebpackPlugin({
			title: 'Learn Electron',
			template: './tools/templates/index.html',
			inject: 'body',
		}),
	inWeb() && new MiniCssExtractPlugin(),
].filter(Boolean);
