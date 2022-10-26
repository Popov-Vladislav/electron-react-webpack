module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	ignorePatterns: ['build', 'dist'],
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'simple-import-sort'],
	rules: {
		'no-var': 2,
		'react/display-name': 0,
		indent: ['error', 'tab'],
		'react/jsx-uses-react': 0,
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		'react/react-in-jsx-scope': 0,
		'simple-import-sort/imports': 2,
		'simple-import-sort/exports': 2,
		'react-hooks/rules-of-hooks': 2,
		'react-hooks/exhaustive-deps': 1,
		'linebreak-style': ['error', 'unix'],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/ban-ts-comment': [
			'error',
			{ 'ts-ignore': 'allow-with-description', minimumDescriptionLength: 10 },
		],
	},
};
