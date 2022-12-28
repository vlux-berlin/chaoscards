const process = require('process');
const path = require('path');
const webpack = require('webpack');
const {whenProd} = require('@craco/craco');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		path.resolve(__dirname, '..', 'src', '**', '!(*.test).js'),
		path.resolve(__dirname, '..', 'src', '**', '*.html'),
	],
	// This extractor is used for tailwind classes.
	// Read more here: https://tailwindcss.com/docs/controlling-file-size/
	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
	style: {
		postcss: {
			plugins: (plugins) =>
				whenProd(
					() => [
						...plugins,
						process.env.NODE_ENV === 'production' ? {cssnano: {}} : {},
						process.env.NODE_ENV === 'production' ? {purgecss: {}} : {},
					],
					[],
				),
		},
	},
	webpack: {
		plugins: [
			new webpack.ProvidePlugin({
				process: 'process/browser',
			}),
		],
		resolve: {
			fallback: {'process/browser': require.resolve('process/browser')},
		},
	},
};
