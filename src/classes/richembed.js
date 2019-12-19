module.exports = class RichEmbed {
    constructor() {
        this.title = null
        this.type = "rich"
        this.description = null
        this.url = null
        this.timestamp = null
        this.color = null
        this.footer = {
            text: null,
            icon_url: null,
            proxy_icon_url: null
        }
        this.image = {
            url: null,
            proxy_url: null,
            height: null,
            width: null
        }
        this.thumbnail = {
            url: null,
            proxy_url: null,
            height: null,
            width: null
        }
        this.video = {
            url: null,
            height: null,
            width: null
        }
        this.provider = {
            name: null,
            url: null
        }
        this.author = {
            name: null,
            url: null,
            icon_url: null,
            proxy_icon_url: null
        }
        this.fields = [
            /**
             * {
             *      name, value, inline
             * }
             */
        ]

    }

    setTitle(newtitle) {
        this.title = newtitle
    }

    setDescription(newdesc) {
        this.description = newdesc
    }

    addField(name, value, inline) {
        this.fields.push({name, value, inline})
    }

    setAuthor(name, url) {
        this.author.name = name
        this.author.url = url
    }
}