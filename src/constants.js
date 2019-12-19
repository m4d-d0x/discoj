// credit; https://github.com/abalabahaha/eris/blob/master/lib/Constants.js (lines 15 to 30)
module.exports.GatewayOPCodes = {
    EVENT:              0,
    HEARTBEAT:          1,
    IDENTIFY:           2,
    STATUS_UPDATE:      3,
    VOICE_STATE_UPDATE: 4,
    VOICE_SERVER_PING:  5,
    RESUME:             6,
    RECONNECT:          7,
    GET_GUILD_MEMBERS:  8,
    INVALID_SESSION:    9,
    HELLO:             10,
    HEARTBEAT_ACK:     11,
    SYNC_GUILD:        12,
    SYNC_CALL:         13
};

module.exports.Endpoints = {
    HTTP: 'https://discordapp.com/api/v6',
    WS: 'wss://gateway.discord.gg/'
}