var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 

module.exports = (token, cb) => {
    var session_id = null
    var heartbeat_interval = null

    client.on('connect', function(connection) {
        connection.on('message', (data) => {
            
            const parsedData = JSON.parse(data.utf8Data)
            /*
            console.log(parsedData)
            */
            if (parsedData.op == 0 && parsedData.t == "READY") { // dispatch
                session_id = parsedData.d.session_id
            }
            if (parsedData.op == 10) {
                heartbeat_interval = parsedData.d.heartbeat_interval
            }
            cb(parsedData)
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