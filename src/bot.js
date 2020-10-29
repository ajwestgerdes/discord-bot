require('dotenv').config();

const triviaDB = require('triviadb');
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
            let AuthUser = function() {
                return triviaDB.getQuestions(1, null, "easy").then(token => { return token } )
              }
              
              let userToken = AuthUser()
              console.log("let user token:  " + userToken) // Promise { <pending> }

              return userToken.then(function(result) {
                console.log(result) // "Some User token"
             })              
        }        
    } 
}) 

//login bot
client.login(process.env.BOT_TOKEN);

