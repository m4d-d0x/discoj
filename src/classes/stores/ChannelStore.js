const Store = require('../Store')
const Channel = require('../channel')
const Requester = require('../../utils/requester')

module.exports = class ChannelStore extends Store {
    constructor(client) {
        super()
        client.guilds.forEach(guild => {
            console.log(guild)
            Requester('/guilds/' + guild.id + '/channels', client.token, {client: {bot: true}}, null).then(channels => {
                channels.forEach(channel => {
                    this.set(channel.id, new Channel(channel, guild))
                })
            })
        })
        console.log(this)
    }
}