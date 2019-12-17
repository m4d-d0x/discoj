module.exports = class Guild {
    constructor(info) {
        this.name = info.name
        this.id = info.id
        //this.owner = info.owner
        this.features = info.permissions
    } 
}