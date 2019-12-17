module.exports = class Channel {
	constructor (info) {
		this.id = info.id
		this.type = 0
		this.name = info.name
		this.position = info.position
		this.nsfw = info.nsfw
	}
}
