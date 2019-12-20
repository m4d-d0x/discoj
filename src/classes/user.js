/**
 * @class User
 */
class User {
	constructor (info) {
                /**
                 * @type {string}
                 */
                this.id = info.id
                /**
                 * @type {string}
                 */
                this.username = info.username
                /**
                 * @type {string}
                 */
                this.discriminator = info.discriminator
                /**
                 * @type {string}
                 */
                this.tag = info.username + "#" + info.discriminator
	}
}

module.exports = User