var request = require('request');

module.exports = (path, token, headers={}, placeholder, cb) => new Promise((resolve, reject) => {

	if (placeholder.client.bot) token = "Bot " + token
	var options = {url: 'https://discordapp.com/api/v6' + path, headers};
	if (token) {
		options.headers.authorization = token
	}
	function requestcallback(error, response, body) {
		if (error) reject(error)
		if (!error && response.statusCode == 200) {
			resolve(JSON.parse(body))
		}
	}
	request(options, requestcallback)
	
})