const Client = require('../client.js')

async function main() {
    var client = await (new Client().login('NjU1NzY4MTA5NjEyNzkzODU2.XfY5sw.CXSncNGH48A0CcsTKJKzPvCJ7JQ'))
    client.on('ready', () => {
        console.log('Logged in')
    })
    client.on('message', (msg) => {
        //console.log(msg)
    })
}

main()