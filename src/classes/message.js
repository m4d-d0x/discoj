module.exports = class Message {
    constructor(info) {
        this.author = info.author
        this.content = info.content
        this.mentions = {
            //everyone: this.info
        }
        this.tts = info.tts
        this.pinned = info.pinned
        this.embeds = info.embeds
        this.type = info.type
    }
}