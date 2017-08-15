const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		vicoders: './vicoders.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
	],
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/js')
	}
};