module.exports = class Channel {
	constructor (info) {
		this.id = info.id
		this.lastmessage = info.last_message_id
		this.type = 0
		this.name = info.name
		this.position = info.position
		this.parentid = info.parent_id
		this.topic = info.topic
		this.guild = {id: info.guild_id}
	}
}
