const Client = require('../client.js')

async function main() {
    var client = await (new Client().login('NjU1NzY4MTA5NjEyNzkzODU2.XfkVtQ.mskpdJZpkkY6Gledj-eJRnNpMds'))
    client.on('ready', () => {
        console.log('Logged in as ' + client.me.username)
        console.log(client.channels)
    })
    client.on('resume', () => {
        console.log('Resuming...')
    })
    client.on('message', (msg) => {
        //console.log(msg)
    })
}

main()
