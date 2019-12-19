module.exports.Client = require('./client')
module.exports.utils = {
    createMessage: require('./utils/createmessage'),
    requester: require('./utils/requester')
}
module.exports.RichEmbed = require('./classes/richembed')