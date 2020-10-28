require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();
const prefix = "!";

let flipModule = require('./commands/flip.js');
let eightBallModule = require('./commands/eightBall.js');
let triviaModule = require('./commands/trivia.js');

//check discord for commands then take action based on command
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
            let ques = triviaModule.triviaQuestion()
            console.log("in bot js: " + ques.then(function(result) {
                result // "Some User token"
             }))               
        }
           
        } 
    }
) 

//login bot
client.login(process.env.BOT_TOKEN);

