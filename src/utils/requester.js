var request = require('request');
const constants = require('../constants')

module.exports = (path, token, headers={}, placeholder, cb) => new Promise((resolve, reject) => {

	if (true) token = "Bot " + token
	var options = {url: constants.Endpoints.HTTP + path, headers};
	if (token) {
		options.headers.authorization = token
	}
	function requestcallback(error, response, body) {
		//console.log('LIMIT:         ' + response.headers['x-ratelimit-limit'])
		//console.log('REMAINING:     ' + response.headers['x-ratelimit-remaining'])
		//console.log('RESET AFTER:   ' + response.headers['x-ratelimit-reset-after'] + 's')
		if (error) reject(error)
		if (!error && response.statusCode == 200) {
			resolve(JSON.parse(body))
		}
	}
	request(options, requestcallback)
	
})