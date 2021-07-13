import dotenv from 'dotenv'
import {flip} from './commands/flip.js'
import {triva} from './commands/trivia.js'
import {stopwatch} from './commands/stopwatch.js'
import triviaDB from 'triviadb'
import discord from 'discord.js'

dotenv.config()

// const triviaDB = require('triviadb');
// const { Client } = require('discord.js');
const client = new discord.Client();
const prefix = "!";

var answerArray = [];

//check discord for commands then take action based on command
client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
       
        if (command === 'flip') {
            message.channel.send(flip)
        }

        if (command === 'stopwatch') {         
            stopwatch.stopwatch()
        }

        if (command === 'trivia') {
             triva.trivia()
        }        
    } 
}) 

//login bot
client.login(process.env.BOT_TOKEN);

