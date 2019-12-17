module.exports = class User {
	constructor (info) {
        this.id = info.id
        this.username = info.username
        this.discriminator = info.discriminator
        this.tag = info.username + "#" + info.discriminator
	}
}
