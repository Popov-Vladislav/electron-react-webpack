module.exports = {
	mode: 'development',
	entry: {
		electron: '../../src/electron/index.ts',
	},
	output: {
		filename: '[name].[contenthash:8].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: './dist',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: require('./webpack.aliases'),
	},
	module: {
		rules: require('./webpack.rules'),
	},
	stats: 'minimal',
};
