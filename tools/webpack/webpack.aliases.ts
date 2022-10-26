const { createWebpackAliases } = require('./webpack.helpers');

module.exports = createWebpackAliases({
	'@assets': 'assets',
	'@components': 'src/components',
	'@common': 'src/common',
	'@main': 'src/app',
	'@renderer': 'src/renderer',
	'@src': 'src',
});
