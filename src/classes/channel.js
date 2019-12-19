const CreateMessage = require('../utils/createmessage.js')

module.exports = class Channel {
	constructor (info, client, fetchmyself) {
		this.id = info.id
		if (fetchmyself) {} else {
			this.type = 0
			this.name = info.name
			this.position = info.position
			this.nsfw = info.nsfw
		}
		this.send = async (arg1, arg2) => {
			var text = null;
			var embed = null;
			if(typeof arg1 == "string") {
				text = arg1
				embed = arg2
			} else if (typeof arg1 == "object") {
				text = arg2
				embed = arg1
			}
			await CreateMessage(client.token,{
				"content": text,
				"tts": false,
				"embed": embed
			  }, this.id)
		}
	}
}
