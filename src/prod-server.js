const express = require('express')
const path = require('path')
const fs = require('fs')

module.exports = server => {
	server.all('/', function (req, res) {
		let data = fs.readFileSync(path.join(__dirname, '/templates/index.html'), 'utf8')
		
		res.set('content-type','text/html')
		res.send(data.replace('ssr', 'DeAundre Payne'))
		res.end()
	})

	server.use('/app.css', express.static(__dirname + '/app.css'))
	server.use('/client.bundle.js', express.static(__dirname + '/client.bundle.js'))
	server.use('/assets/images/shin_akuma.jpg', express.static(__dirname + '/assets/images/shin_akuma.jpg'))
}