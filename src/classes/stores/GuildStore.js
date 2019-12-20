const Store = require('../Store')
const Guild = require('../guild')

/**
 * Stores guilds
 * @class GuildStore
 * @extends Store
 */
class GuildStore extends Store {
    constructor(apiguilds, client) {
        super()
        apiguilds.forEach(apiguild => {
            this.set(apiguild.id, new Guild(apiguild, client ,true))
        })
    }
}

module.exports = GuildStore