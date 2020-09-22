const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

let config = {
	name: 'client',
	target: 'web',
	entry: {
		app: './src/client-entry.js' // ./src/index.js
	},
	output: {
		publicPath: '/',
		filename: 'client.bundle.js' // main.js
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: '[name].[ext]',
							outputPath: 'assets/images/'
						}
					},
				],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			inject: 'head',
			template: './src/templates/index.html',
			filename: 'templates/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true
			}
		})
	]
}

if (process.env.NODE_ENV === 'development') {
	config = merge(config, {
		entry: {
			app: [
				'./src/client-entry.js',
				'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
			],
		},
		output: {
			hotUpdateChunkFilename: '.hot/hot-update.js',
			hotUpdateMainFilename: '.hot/hot-update.json',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	})
}

module.exports = merge(base, config)