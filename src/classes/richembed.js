/**
 * @class RichEmbed
 */
class RichEmbed {
    constructor() {
        /**
         * @type {string}
         */
        this.title = null
        /**
         * @type {string}
         */
        this.type = "rich"
        /**
         * @type {string}
         */
        this.description = null
        /**
         * @type {string}
         */
        this.url = null
        /**
         * @type {timestamp}
         */
        this.timestamp = null
        /**
         * @type {number}
         */
        this.color = null
        /**
         * @type {object}
         * @property {string} text
         * @property {string} icon_url Optional
         * @property {string} proxy_icon_url Optional
         */
        this.footer = {
            text: null,
            icon_url: null,
            proxy_icon_url: null
        }
        /**
         * @type {object}
         * @property {string} url
         * @property {string} proxy_url Optional
         * @property {number} height Optional
         * @property {number} width Optional
         */
        this.image = {
            url: null,
            proxy_url: null,
            height: null,
            width: null
        }
        /**
         * @type {object}
         * @property {string} url
         * @property {string} proxy_url Optional
         * @property {number} height Optional
         * @property {number} width Optional
         */
        this.thumbnail = {
            url: null,
            proxy_url: null,
            height: null,
            width: null
        }
        /**
         * @type {object}
         * @property {string} url
         * @property {number} height Optional
         * @property {number} width Optional
         */
        this.video = {
            url: null,
            height: null,
            width: null
        }
        /**
         * @type {object}
         * @property {string} name
         * @property {string} url
         */
        this.provider = {
            name: null,
            url: null
        }
        /**
         * @type {object}
         * @property {string} name
         * @property {string} url Optional
         * @property {string} icon_url Optional
         * @property {string} proxy_icon_url Optional
         */
        this.author = {
            name: null,
            url: null,
            icon_url: null,
            proxy_icon_url: null
        }
        /**
         * @type {array}
         * @property {string} name Title of the field
         * @property {string} value Value of the field
         * @property {boolean} inline False by default. 
         */
        this.fields = [
            /**
             * {
             *      name, value, inline
             * }
             */
        ]

    }

    /**
     * 
     * @param {string} newtitle New title for the embed
     */
    setTitle(newtitle) {
        this.title = newtitle
    }

    /**
     * 
     * @param {string} newdesc New description for the embed
     */
    setDescription(newdesc) {
        this.description = newdesc
    }

    /**
     * 
     * @param {string} name Title for the field
     * @param {string1} value Description for the field
     * @param {boolean} inline Default to true 
     */
    addField(name, value, inline=false) {
        this.fields.push({name, value, inline})
    }

    /**
     * 
     * @param {string} name Name of the author
     * @param {string} url Url of the author
     * @param {string} iconurl Link to the icon for the author
     */
    setAuthor(name, url, iconurl) {
        this.author.name = name
        this.author.url = url
        this.author.icon_url = iconurl
    }
}

module.exports = RichEmbed