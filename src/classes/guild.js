const requester = require('../utils/requester')
const MemberStore = require('./stores/MemberStore')

/**
 * @class Guild
 * A guild
 */
class Guild {
    constructor(info, client, fetchmyself) {

        /**
         * @type {Client}
         */
        this.client = client

        /**
         * @type {string}
         */
        this.name = null
        /**
         * @type {string}
         */
        this.owner_id = null
        /**
         * @type  {number}
         */
        this.verification_level = null
        /**
         * @type {array}
         */
        this.roles = null
        /**
         * @type {number}
         */
        this.max_members = null
        /**
         * @type {string}
         */
        this.locale = null
        /**
         * @type {boolean}
         */
        this.embed_enabled = null
        /**
         * @type {string}
         */
        this.rules_channel_id = null
        /**
         * @type {string}
         */
        this.vanity_code_url = null
        /**
         * @type {number}
         */
        this.premium_tier = null
        /**
         * @type {number}
         */
        this.premium_subscription_count = null
        /**
         * @type {number}
         */
        this.default_message_notifications = null
        /**
         * @type {MemberStore}
         */
        this.members = null
        //this.name = info.name
        //this.id = info.id
        //this.owner = info.owner
        //this.features = info.permissions
        /**
         * @returns {guild} A more complete guild object
         */
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

module.exports = Guild