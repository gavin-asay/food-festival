const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static', // the report outputs to an HTML file in the dist folder
		}),
	],
	entry: {
		app: './assets/js/script.js',
		events: './assets/js/events.js',
		schedule: './assets/js/schedule.js',
		tickets: './assets/js/tickets.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jpe?g$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name(file) {
								return '[path][name].[ext]';
							},
							publicPath: function (url) {
								const path = url.replace('../', './dist/assets/');
								console.log(path);
								return path;
							},
							esModule: false,
						},
					},
					{
						loader: 'image-webpack-loader',
					},
				],
			},
		],
	},
};
