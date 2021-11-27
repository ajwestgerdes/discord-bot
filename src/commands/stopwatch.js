export function stopwatch(message, client) {

    let mentionId = message.content.split('@!')[1].slice(0, -1)
    let msgAuther = message.author.username
    let mentionsMap = message.mentions.users
   
    
    // console.log(mentionsMap)
 

    // client.users.fetch(mentionId, false).then((user) => {
    //     user.send('ATTENTION ' + user.username + '! \n' + msgAuther + ' has put you on the clock! Better join there channel as fast as you can! Or be publicly ridiculed.');
    //    });

    client.on('voiceStateUpdate', (oldState, newState) => {
        console.log('made it inside voice state update')
        console.log(oldState.guild.voiceStates.cache)
        console.log(mentionId)
        console.log('------------------------------------------')

        let newUserChannel = newState.voiceChannel
        let oldUserChannel = oldState.voiceChannel
      
      
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
            console.log('made it in user join')
           // User Joins
      
        }
    })
}