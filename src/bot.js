import dotenv from 'dotenv'
import {flip} from './commands/flip.js'
import {triva} from './commands/trivia.js'
import {stopwatch} from './commands/stopwatch.js'
import {poll} from './commands/poll.js'
import discord from 'discord.js'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

//Set up mongoose connection
// mongoose.connect(process.env.DB_AUTH, { useNewUrlParser: true , useUnifiedTopology: true});
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const client = new discord.Client();
const prefix = '!';

//check discord for commands then take action based on command
client.on('message', (message) => {
    if (message.content.startsWith(prefix) && message.channel.name === 'pumper-bot') {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        console.log(command)
       
        if (command === 'flip') {
            console.log('made it in flip')
            message.channel.send(flip())
        }

        if (command === 'stopwatch') {         
            stopwatch(message, client)
        }

        if (command === 'trivia') {
             triva(message, client)
        }   
        
        if (command === 'poll') {
            poll(message, client)
        }
    } 
}) 

//login bot
client.login(process.env.BOT_TOKEN);

