const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		web: './src/app/index.tsx',
	},
	output: {
		filename: '[name].[contenthash:8].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: './dist',
	},
	plugins: [...require('./tools/webpack/webpack.plugins')],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: require('./tools/webpack/webpack.aliases'),
	},
	module: {
		rules: require('./tools/webpack/webpack.rules'),
	},
	stats: 'minimal',
};
