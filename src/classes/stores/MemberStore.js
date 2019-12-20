const Store = require('../Store')
const Member = require('../member')


/**
 * @class MemberStore
 * @extends Store
 * Stores a guild's members
 */
class MemberStore extends Store {
    constructor(apimembers, client) {
        super()
        apimembers.forEach(apimember => {
            this.set(apimember.user.id, new Member(apimember))
        })
        console.log(this)
    }
}

module.exports = MemberStore