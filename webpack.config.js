var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
	filename: 'app.css'
});

module.exports = {
	entry: './non_use_webpack.js',
	entry: {
		app: './assets/scss/app.scss'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						} 
					}
				]
			},
			{
				test: /\.css$/,
				use: extractPlugin.extract({
					use: ['css-loader']
				})
			},
			{
				test: /\.scss$/,
				use: extractPlugin.extract({
					use: [
						'css-loader',
						'sass-loader'
					]
				})
			},
			{
				test: /\.(jpg|png|gif|jpeg|svg|bmp)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images/',
							publicPath: ''
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|otf|woff|svg|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/',
							publicPath: ''
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery:'jquery',
		}),
		extractPlugin,
		new CleanWebpackPlugin(['dist'])
	]
}