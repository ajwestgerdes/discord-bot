require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const prefix = "!";

//check for !flip in messages, send HEADS or TAILS message based on rng 
client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        var flip = Math.floor(Math.random() * 2) + 1;

        //Logic for coin flip
        if (command === 'flip' && flip === 1) {
            message.channel.send('HEADS')
        } else if (command === 'flip' && flip === 2) {
            message.channel.send('TAILS')
        }
        //delete !flip from message board
        message.delete();
    }
})

//login bot
client.login(process.env.BOT_TOKEN);

