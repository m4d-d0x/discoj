const Client = require('../client.js')

async function main() {
    var client = await (new Client().login('NjU1NzY4MTA5NjEyNzkzODU2.Xfj5Fw.wmd6EwSCw2S20UBR017CYVxqctA'))
    client.on('ready', () => {
        console.log('Logged in')
    })
    client.on('message', (msg) => {
        //console.log(msg)
    })
}

main()