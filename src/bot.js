require('dotenv').config();

const triviaDB = require('triviadb');
const { Client } = require('discord.js');
const client = new Client();
const prefix = "!";

let flipModule = require('./commands/flip.js');
let eightBallModule = require('./commands/eightBall.js');
let triviaModule = require('./commands/trivia.js');

var answerArray = [];

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
            let TriviaQuestion = function() {
                return triviaDB.getQuestions(1, null, "easy").then(token => { return token } )
              }
              
              let triviaResult = TriviaQuestion()
              console.log("let user token:  " + triviaResult)

              return triviaResult.then(function(result) {
                answerArray = result.results[0].incorrect_answers.push(result.results[0].correct_answer);
                message.channel.send(result.results[0].question).then(function (message) {
                    message.react("🇦")
                    message.react("🇧")
                    message.react("🇨")
                    message.react("🇩")
                  }).catch(function() {
                    //Something
                   });
                console.log(result)
                console.log(result.results[0].correct_answer)
                correctAnswer = result.results[0].correct_answer
                console.log(result.results[0].incorrect_answers.sort())
                answerArray = result.results[0].incorrect_answers.sort()

                for(x in answerArray) {
                    abcArray = ['A','B','C','D']
                    message.channel.send(abcArray[x] + ': ' + answerArray[x])
                }
                client.on('messageReactionAdd', (reaction) => {
                    let emoji = reaction.emoji;
                    console.log(emoji.reaction.count)
            

                    switch (emoji.name) {
                        case "🇦":           
                            if (correctAnswer === answerArray[0] && emoji.reaction.count > 1){
                                emoji.remove()
                                return message.channel.send("correct") 
                            } else if (correctAnswer !== answerArray[0] && emoji.reaction.count > 1) {
                                emoji.remove()
                                return message.channel.send("nope")
                            }
                            break
                        case "🇧":
                            if (correctAnswer === answerArray[1] && emoji.reaction.count > 1){
                                    return message.channel.send("correct")
                                } else if (correctAnswer !== answerArray[1] && emoji.reaction.count > 1) {
                                     return message.channel.send("nope")
                                }
                                break
                        case "🇨":
                            if (correctAnswer === answerArray[2] && emoji.reaction.count > 1){
                                return message.channel.send("correct")
                            } else if (correctAnswer !== answerArray[2] && emoji.reaction.count > 1) {
                                 return message.channel.send("nope")
                            }
                            break
                        case "🇩":
                            if (correctAnswer === answerArray[3] && emoji.reaction.count > 1){
                                return message.channel.send("correct")
                            } else if (correctAnswer !== answerArray[3] && emoji.reaction.count > 1) {
                                 return message.channel.send("nope")
                            }
                    }
            
            });
                
                console.log(answerArray)
                
             })              
        }        
    } 
}) 

//login bot
client.login(process.env.BOT_TOKEN);

