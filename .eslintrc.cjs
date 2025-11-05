/**
 * ESLint configuration for a React + Vite project using modern JSX runtime.
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	plugins: ['react', 'react-hooks'],
	rules: {
		// React 17+ (new JSX transform) doesn't require React in scope
		'react/react-in-jsx-scope': 'off',
		// PropTypes not required if using TypeScript (keep off if not used)
		'react/prop-types': 'off',
		// Prefer const when variables are not reassigned
		'prefer-const': ['warn', { destructuring: 'all' }],
		// Disallow unused variables except for rest siblings and underscore-prefixed
		'no-unused-vars': [
			'warn',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true },
		],
		// Encourage ===/!==
		eqeqeq: ['warn', 'smart'],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};


