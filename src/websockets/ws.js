var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 

module.exports = (token, cb) => {
    var session_id = null
    client.on('connect', function(connection) {
        connection.on('message', (data) => {
            data = JSON.parse(data.utf8Data)
            if (data.t == 'READY') {
                session_id = data.d.session_id
                console.log(session_id)
            }
            cb(data)
        })
        connection.send(JSON.stringify({
            "op": 2, // 2 = identify
            "d": {
                "token": token,
                "properties": {
                    "$os": "linux",
                    "$browser": "disco",
                    "$device": "disco"
                }
            },
            "s": null,
            "t": null
        }))
    });

    client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
    });
     


    client.connect('wss://gateway.discord.gg/');
}