const userClass = require('./classes/user.js')
const channelClass = require('./classes/channel.js')
const requester = require('./utils/requester.js')
const GuildStore = require('./classes/stores/GuildStore')
const ChannelStore = require('./classes/stores/ChannelStore')
const websockets = require('./websockets/ws.js')
const messageClass = require('./classes/message.js')

const events = require('events')

/**
 * @class Client
 * @param {object} settings Settings for client
 * @fires Client#message Returns a new message class whenever the bot sees a new message
 * @fires Client#resume Triggers whenever the bot resumes a connection. DONT USE IT
 * @fires Client#ready Triggers when the bot connected for the first time to discord gateway
*/

class Client extends events {


	constructor (settings) {

		super()

		/**
		 * Token of the bot
		 * @return {string} The string value of the token
		 */
		this.token = undefined
		/**
		 * If the user is a bot or no
		 * @return {boolean} True if the user is a bot
		 */
		this.bot = true
		/**
		 * True if the client connected at least once
		 * @return {boolean} true if the client connected at least once
		 */
		this.connectedonce = false

		/**
		 * User proprties of the bot
		 * @default undefined
		 */
		this.me = undefined

		/**
		 * Is the GuildStore containing the guilds the bot is in
		 */
		this.guilds = undefined
		
		/**
		 * Is the ChannelStore containing all the channels from all guilds the bot is in
		 */
		this.channels = undefined
		
		/**
		 * Current status of the bot
		 */
		this.status = {
			"since": 91879201,
			"game": {
			  "name": "Made with discoj",
			  "type": 0
			},
			"status": "online",
			"afk": false
		  }

		/**
		 * @returns {function}
		 * @param {object} Status Status object
		 */
		this.setStatus = null

	}


	/**
	 * Get user functions returns the user class of a user.
	 * @param {string} id ID of the user you want to get info
	 */
	getuser(id) {
		return new Promise(async (resolve, reject) => {
			let user = await requester('/users/' + id, this.token, {}, {client:this})
			resolve(new userClass(user))
		})
	}

	/**
	 * Logs in the bot using websockets
	 * @param {string} token Token of the application
	*/
	login(token) {
		return new Promise(async (resolve, reject) => {
			this.token = token
			this.me = await this.getuser('@me')
			this.guilds = new GuildStore(await requester('/users/@me/guilds', this.token, {}, {client:this}), this)
			this.channels = new ChannelStore(this)
			websockets(token, (message) => {
				if (message == 'resume') {
					console.log('resume')
					return this.emit('resume')
				}
				if (message.t == 'READY') {
					if (!this.connectedonce) { 
						this.emit('ready')
						this.connectedonce = true
					}
				}
				if (message.t == 'MESSAGE_CREATE') {
					this.emit('message', new messageClass(message.d, this))
				}
			}, (setpresence) => {
				this.setStatus = setpresence
			})
			resolve(this)
		})
	}

}


module.exports = Client