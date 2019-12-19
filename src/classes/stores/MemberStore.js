const Store = require('../Store')
const Member = require('../member')

module.exports = class MemberStore extends Store {
    constructor(apimembers, client) {
        super()
        apimembers.forEach(apimember => {
            this.set(apimember.user.id, new Member(apimember))
        })
        console.log(this)
    }
}