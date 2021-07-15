export function stopwatch(message, client) {
    console.log(message)
    console.log(message.author)
    let mentionId = message.content.split('@!')[1].slice(0, -1)
    let msgAuther = message.author.username
    console.log(mentionId)
    let mentionsMap = message.mentions.users
    console.log(mentionsMap.get(mentionId))

    client.users.fetch(mentionId, false).then((user) => {
        user.send('ATTENTION ' + user.username + '! \n' + msgAuther + ' has put you on the clock! Better join there channel as fast as you can! Or be publicly ridiculed.');
       });
}