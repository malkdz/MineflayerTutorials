const mineflayer = require('mineflayer');

const botArgs = {
    host: ' malkdz16.aternos.me',
    port: '13174',
    username: "malkhg41",
    version: '1.8.9'
};

const initBot = () => {

    // Setup bot connection
    let bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        let botSocket = bot._client.socket;
        console.log(`Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);
    });

    bot.on('end', () => {
        console.log(`Disconnected`);

        // Attempt to reconnect
        setTimeout(initBot, 240000);
    });

    bot.on('error', (err) => {
        if (err.code === 'ECONNREFUSED') {
            console.log(`Failed to connect to ${err. malkdz16.aternos.me}:${err.13174}`)
        }
        else {
            console.log(`Unhandled error: ${err}`);
        }
    });
};

initBot();


