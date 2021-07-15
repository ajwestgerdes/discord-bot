import dotenv from 'dotenv'
import {flip} from './commands/flip.js'
import {triva} from './commands/trivia.js'
import {stopwatch} from './commands/stopwatch.js'
import discord from 'discord.js'

dotenv.config()

const client = new discord.Client();
const prefix = "!";

var answerArray = [];

//check discord for commands then take action based on command
client.on('message', (message) => {
    if (message.content.startsWith(prefix) && message.channel.name === 'pumper-bot') {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
       
        if (command === 'flip') {
            message.channel.send(flip)
        }

        if (command === 'stopwatch') {         
            stopwatch(message, client)
        }

        if (command === 'trivia') {
             triva(message, client)
        }        
    } 
}) 

//login bot
client.login(process.env.BOT_TOKEN);

