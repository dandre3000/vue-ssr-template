const path = require('path')

module.exports = {
	mode: process.env.NODE_ENV || 'production', // production
	output: {
		path: path.resolve(__dirname, 'dist'), // dist
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env']
						}
					},
					{
						loader: 'eslint-loader',
						options: {
							cache: true,
						}
					}
				]
			}
		]
	},
	devtool: 'source-map'
}