module.exports = {
    app: {
        token: 'ODM0NDg4MzQ2MTcxOTMyNzAy.GJZMNg.CGX35zaHCBjrXNKT-95TqkLpXEUfWaOOheZJSw',
        playing: 'by The Cantina',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
