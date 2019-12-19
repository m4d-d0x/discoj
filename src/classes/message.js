const channelClass = require('./channel')
const guildClass = require('./guild')

module.exports = class Message {
    constructor(info, client) {
        this.channel = new channelClass({id: info.channel_id}, client)
        this.author = info.author
        this.content = info.content
        this.mentions = {
            //everyone: this.info
        }
        this.tts = info.tts
        this.pinned = info.pinned
        this.embeds = info.embeds
        this.type = info.type
        this.member = info.member
        this.guild = new guildClass({
            id: info.guild_id
        }, client, false)
    }
}