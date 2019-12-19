const User = require('./user')

module.exports = class Member {
	constructor (info, client, fetchmyself) {
        this.user = new User(info.user)
        this.roles = info.roles
        this.nick = info.nick
        this.premium_since = info.premium_since
        this.mute = info.mute
        this.deaf = info.deaf
        this.joined_at = info.joined_at
	}
}
