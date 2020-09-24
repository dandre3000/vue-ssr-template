const express = require('express')
const path = require('path')
const fs = require('fs')
const Vue = require('vue')

let template = fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf8').replace('ssr', '<!--vue-ssr-outlet-->')
const renderer = require('vue-server-renderer').createRenderer({ template })

module.exports = server => {
	server.all('/', function (req, res) {
		const main = new Vue({
			el: '#app',
			render: h => h('div', {}, 'Server Vue!')
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

	server.use('/app.css', express.static(__dirname + '/app.css'))
	server.use('/client.bundle.js', express.static(__dirname + '/client.bundle.js'))
	server.use('/assets/images/shin_akuma.jpg', express.static(__dirname + '/assets/images/shin_akuma.jpg'))
}