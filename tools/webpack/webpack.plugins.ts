const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { inDev } = require('./webpack.helpers');

module.exports = [
	new ForkTsCheckerWebpackPlugin(),
	inDev() && new webpack.HotModuleReplacementPlugin(),
	inDev() && new ReactRefreshWebpackPlugin(),
	new HtmlWebpackPlugin({
		title: 'Learn Electron',
		template: 'tools/templates/index.html',
		inject: 'body',
	}),
	new CleanWebpackPlugin(),
	new MiniCssExtractPlugin(),
].filter(Boolean);
