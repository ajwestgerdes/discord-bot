const triviaDB = require('triviadb');

exports.triviaQuestion = function () {
    let AuthUser = function() {
        return triviaDB.getQuestions(1, null, "easy").then(token => { return token } )
      }
      
      let userToken = AuthUser()
      console.log("let user token:  " + userToken) // Promise { <pending> }
      
      

      return userToken.then(function(result) {
        result // "Some User token"
     })
}


