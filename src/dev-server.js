const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const Vue = require('vue')

const config = require('../webpack.client.js')
const compiler = webpack(config)

let template = fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf8').replace('ssr', '<!--vue-ssr-outlet-->')
const renderer = require('vue-server-renderer').createRenderer({ template })

module.exports = server => {
	// routing must be above webpack-dev-middleware & webpack-hot-middleware
	server.all('/', function (req, res) {
		const main = new Vue({
			el: '#app',
			render: h => h('h1', {}, 'Server Vue!')
		})
		
		renderer.renderToString(main, (err, html) => {
			if (err) {
				res.status(500).end('Internal Server Error')
				return
			}
			
			res.set('content-type','text/html')
			res.end(html)
		})
	})

	server.use(
		require('webpack-dev-middleware')(compiler, {
			publicPath: config.output.publicPath
		})
	)
	server.use(
		require('webpack-hot-middleware')(compiler, {
			path: '/__webpack_hmr',
			log: console.log
		})
	)
}