require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const prefix = "!";

let flipModule = require('./commands/flip.js');
let eightBallModule = require('./commands/eightBall.js');
let triviaModule = require('./commands/trivia.js');

//check for !flip in messages, send HEADS or TAILS message based on rng 
client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
       
        if (command === 'flip') {
            message.channel.send(flipModule.flip())
        }

        if (command === '8ball') {
            message.channel.send(eightBallModule.eightBall(args))
        }

        if (command === 'trivia') {
            triviaModule.trivia()
        }

        //delete !flip from message board
        message.delete();
    }
})

//login bot
client.login(process.env.BOT_TOKEN);

