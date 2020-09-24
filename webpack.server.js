const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
	name: 'server',
	target: 'node',
	node: {
		__dirname: false,
		__filename: false,
	},
	externals: [nodeExternals({
		allowlist: /\.css$/
	})],
	entry: './src/server-entry.js',
	output: {
		filename: 'server.bundle.js',
		libraryTarget: 'commonjs2'
	}
})