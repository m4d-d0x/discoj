const Client = require('../client.js')

async function main() {
    var client = await (new Client().login(''))
    client.on('ready', () => {
        console.log('Logged in as ' + client.me.username)
    })
    client.on('resume', () => {
        console.log('Resuming...')
    })
    client.on('message', (msg) => {
        //console.log(msg)
    })
}

main()