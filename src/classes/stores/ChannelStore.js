const Store = require('../Store')
const Channel = require('../channel')
const Requester = require('../../utils/requester')

module.exports = class GuildStore extends Store {
    constructor(client) {
        super()
        client.guilds.forEach(guild => {
            console.log(guild.id)
        })
    }
}