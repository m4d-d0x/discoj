var request = require('request');
const constants = require('../constants')

module.exports = (token, data, channel) => new Promise((resolve, reject) => {
	if (true) token = "Bot " + token
	var options = {url: constants.Endpoints.HTTP + `/channels/${channel}/messages`, headers: {}, json:data};
	if (token) {
		options.headers.authorization = token
    }
	function requestcallback(error, response, body) {
		console.log(body)
		if (error) reject(error)
		if (!error && response.statusCode == 200) {
			resolve(body)
		}
	}
	const res = request.post(options, requestcallback)
})