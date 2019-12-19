const requester = require('../utils/requester')
const MemberStore = require('./stores/MemberStore')

module.exports = class Guild {
    constructor(info, client, fetchmyself) {
        this.client = client
        //this.name = info.name
        //this.id = info.id
        //this.owner = info.owner
        //this.features = info.permissions
        this.fetch = () => new Promise(async (resolve, reject) => {
            var g = await requester('/guilds/' + info.id, this.client.token, {}, null)
            this.name = g.name
            this.owner_id = g.owner_id
            this.verification_level = g.verification_level
            this.roles = g.roles
            this.max_members = g.max_members
            this.locale = g.preferred_locale
            this.embed_enabled = g.embed_enabled
            this.rules_channel_id = g.rules_channel_id
            this.vanity_code_url = g.vanity_url_code
            this.premium_tier = g.premium_tier
            this.premium_subscription_count = g.premium_subscription_count
            this.default_message_notifications = g.default_message_notifications
            this.members = new MemberStore(await requester('/guilds/' + info.id + '/members?limit=1000', this.client.token, {}, null))
            resolve(this)
        })
        if (fetchmyself && info.id) {
            this.fetch(info.id)
        } else {
            this.name = info.name
            this.id = info.id
            this.features = info.permissions
        }
    }
}