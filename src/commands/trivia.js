const triviaDB = require('triviadb');

exports.trivia = function () {
    console.log(triviaDB.getQuestions(3, null, "hard"))
}