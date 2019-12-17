module.exports = class Channel {
	constructor (info, guild) {
		this.id = info.id
		this.type = 0
		this.name = info.name
		this.position = info.position
		this.nsfw = info.nsfw
		this.guild = guild
	}
}
