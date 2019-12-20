const channelClass = require('./channel')
const guildClass = require('./guild')

/**
 * @class Message
 */
class Message {
    constructor(info, client) {
        /**
         * @type {Channel}
         */
        this.channel = new channelClass({id: info.channel_id}, client)
        /**
         * @type {object}
         */
        this.author = info.author
        /**
         * @type {string}
         */
        this.content = info.content
        /**
         * @type {boolean}
         */
        this.tts = info.tts
        /**
         * @type {boolean}
         */
        this.pinned = info.pinned
        /**
         * @type {array}
         */
        this.embeds = info.embeds
        /**
         * @type {number}
         */
        this.type = info.type
        /**
         * @type {object}
         */
        this.member = info.member
        /**
         * @type {Guild}
         */
        this.guild = new guildClass({
            id: info.guild_id
        }, client, false)
    }
}

module.exports = Message