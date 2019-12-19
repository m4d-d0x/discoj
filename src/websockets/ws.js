const constants = require('../constants')

var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 
var min/**Seconds to identify after resume */ = 1 
var max/**Seconds to identify after resume */ = 5;

module.exports = (token, cb) => {
    var session_id = null
    var seq_number = 0

    var status = 'disconnected'

    client.on('connect', function(connection) {

        function connect() {
            connection.send(JSON.stringify({
                "op": constants.GatewayOPCodes.IDENTIFY, // 2 = identify
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
        }

        function resume() {
            connection.send(JSON.stringify({
                op: constants.GatewayOPCodes.RESUME,
                d: {
                    "token": token,
                    "session_id": session_id,
                    "seq": seq_number
                }
            }))
            cb('resume')
            var rand = Math.floor(Math.random() * (max - min + 1) + min) // random between MIN and MAX
            setTimeout(connect, rand * 1000)
        }

        connect()

        connection.on('close', () => { 
            client.connect(constants.Endpoints.WS)
            status = 'resuming'
        })

        connection.on('message', (data) => {
            
            const parsedData = JSON.parse(data.utf8Data);
            /*
            console.log(parsedData)
            */
            if (parsedData.op == 0 || parsedData.t == "READY") { // dispatch
                if (parsedData.d.session_id) {
                    session_id = parsedData.d.session_id
                    status = "connected"
                }
                if (status == 'resuming') resume()
            }
            if (parsedData.op == constants.GatewayOPCodes.HELLO) {
                heartbeat_interval = parsedData.d.heartbeat_interval
            }
            if (parsedData.op == constants.GatewayOPCodes.EVENT) {
                seq_number = parsedData.s
            }
            cb(parsedData)
        })
        
    });

    client.on('connectFailed', function(error) {
        console.log('Connect Error: ' + error.toString());
    });
     
    

    client.connect(constants.Endpoints.WS);
}