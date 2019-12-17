const userClass = require('./classes/user.js')
const channelClass = require('./classes/channel.js')
const requester = require('./utils/requester.js')
const GuildStore = require('./classes/stores/GuildStore')
const websockets = require('./websockets/ws.js')
const messageClass = require('./classes/message.js')

const events = require('events')

module.exports = class Client extends events {
	constructor (settings) {

		super()

		this.token = undefined
		
		this.bot = true

		this.getchannel = (id) => new Promise(async (resolve, reject) => {
			let channel = await requester('/channels/' + id, this.token, {}, {client:this})
			resolve(new channelClass(channel))
		})

		this.getuser = (id) => new Promise(async (resolve, reject) => {
			let user = await requester('/users/' + id, this.token, {}, {client:this})
			resolve(new userClass(user))
		})

		this.me = undefined

		this.login = (token) => new Promise(async (resolve, reject) => {
			this.token = token
			this.me = await this.getuser('@me')
			this.guilds = new GuildStore(await requester('/users/@me/guilds', this.token, {}, {client:this}))
			websockets(token, (message) => {
				if (message.t == 'READY') {
					this.emit('ready')
				}
				if (message.t == 'MESSAGE_CREATE') {
					this.emit('message', new messageClass(message.d))
				}
			})
			resolve(this)
		})

	}
}
