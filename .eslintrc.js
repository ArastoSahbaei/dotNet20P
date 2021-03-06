module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			0
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		],
	}
}