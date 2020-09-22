const server = require('express')()

if (process.env.NODE_ENV == 'development') {
	require('./dev-server.js')(server)
} else {
	require('./prod-server.js')(server)
}

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
	console.log('process.env.NODE_ENV', process.env.NODE_ENV || 'production')
	console.log(`server listening to ${PORT}....`)
	console.log(`${__dirname}`)
	console.log('Press Ctrl+C to quit.')
})