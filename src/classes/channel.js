const CreateMessage = require('../utils/createmessage.js')

/**
 * @class Channel
 * A channel
 */
class Channel {
	constructor (info, client, fetchmyself) {

		/**
		 * The client
		 */
		this.client = client

		/**
		 * @type {string} 
		 * Stores the id of the channel
		 */
		this.id = info.id

		/**
		 * @type {number} 
		 * Type of the channel
		 */
		this.type = null

		/**
		 * @type {string} 
		 * Name of the channel
		 */
		this.name = null

		/**
		 * @type {number} 
		 * Position of the channel
		 */
		this.position = null

		/**
		 * @type {boolean} 
		 * If the bot channel is nsfw or no
		 */
		this.nsfw = null

		if (fetchmyself) {} else {
			this.type = 0
			this.name = info.name
			this.position = info.position
			this.nsfw = info.nsfw
		}
	}


	/**
	 * 
	 * @param {string} content Content of the message 
	 * @param {RichEmbed} embed An Embed, see RichEmbed class 
	 */
	async send(arg1, arg2) {
		var text = null;
		var embed = null;
		if(typeof arg1 == "string") {
			text = arg1
			embed = arg2
		} else if (typeof arg1 == "object") {
			text = arg2
			embed = arg1
		}
		await CreateMessage(this.client.token,{
			"content": text,
			"tts": false,
			"embed": embed
		  }, this.id)
	}
}


module.exports = Channel