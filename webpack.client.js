const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
	name: 'client',
	target: 'web',
	entry: {
		app: './src/client-entry.js'
	},
	output: {
		publicPath: '/',
		filename: 'client.bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'head',
			template: './src/templates/index.html',
			filename: 'templates/index.html'
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