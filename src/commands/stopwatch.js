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
        console.log(oldState)
        console.log('------------------------------------------')
        console.log(oldState.guild)

        let newUserChannel = newMember.voiceChannel
        let oldUserChannel = oldMember.voiceChannel
      
      
        if(oldUserChannel === undefined && newUserChannel !== undefined) {
      
           // User Joins
      
        }
    })
}