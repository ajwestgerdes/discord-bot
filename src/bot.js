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

//check for !8ball then return 8ball statement based on question asked
client.on('message', (message) => {
    if (message.content.startsWith(prefix)) {
        const [command, ...args] = message.content.trim().substring(prefix.length).split(/\s+/);
        var eball = Math.floor(Math.random() * 6) + 1;
        console.log(args)
        message.delete();
        //if logic for 8ball
        if (command === '8ball' && eball === 1) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 1')
        } else if (command === '8ball' && eball === 2) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 2')
        } else if (command === '8ball' && eball === 3) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 3')
        } else if (command === '8ball' && eball === 4) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 4')
        } else if (command === '8ball' && eball === 5) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 5')
        } else if (command === '8ball' && eball === 6) {
            message.channel.send("Question: " + args.join(" "))
            message.channel.send('8ball says phrase 6')
        }
        //delete !8ball from message board

    }
})

//login bot
client.login(process.env.BOT_TOKEN);

