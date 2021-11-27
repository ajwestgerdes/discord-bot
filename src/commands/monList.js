export function monList(message, client) {

    let content = message.content.split(' ')
    let mentions = message.mentions.users

    console.log(mentions)
    console.log(content)
   
    // console.log(message)
    // console.log('------------ client ---------')
    // console.log(client)


    if (content[1] === '-l') {
        console.log('-l was the arg')
        // get list of the user
        if (content[2].startsWith('<@')) {
            console.log('contains mention')
            // get list of user mentioned
        }
    }

    if (content[1] === '-a') {
        console.log('-a add pokemon')
        // add pokemon to users list
    }

    if (content[1] === '-d') {
        console.log('-d delete mon from list')
        // delete pokemon from users list
    }

}