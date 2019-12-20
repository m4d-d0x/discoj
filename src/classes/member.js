const User = require('./user')

/**
 * @class Member
 * A member
 */
class Member {
	constructor (info, client, fetchmyself) {
        /**
         * @type {User}
         */
        this.user = new User(info.user)
        /**
         * @type {array}
         */
        this.roles = info.roles
        /**
         * @type {string}
         */
        this.nick = info.nick
        /**
         * @type {timestamp}
         */
        this.premium_since = info.premium_since
        /**
         * @type {boolean}
         */
        this.mute = info.mute
        /**
         * @type {boolean}
         */
        this.deaf = info.deaf
        /**
         * @type {timestamp}
         */
        this.joined_at = info.joined_at
	}
}


module.exports = Member