import Discord from 'discord.js'


function presetOne() {

}

// Function to pull up a form and allow user to create a vote. Then track votes
export async function poll(message, client) {
    //establish author of the !poll command
    const author = message.author
    let msgIndex = 0
    const optStr = '1 - :white_check_mark: :negative_squared_cross_mark: \n 2 - like, no like, dont care'

    //initalize first embeded message of poll wizard
    const intialMsg = new Discord.MessageEmbed()
        .setTitle('Poll Creation')
        .addField(
            'What is the question for this poll?', 
            'Please be as descriptive as possible while being under one sentence'
        )
        .setTimestamp()
        .setFooter('type quit to end poll creation')

    //Send inital embeded message for poll creation
    var initMsg = await message.channel.send(intialMsg)

    //Listen to channel for follow up inputs from user
    client.on('message', (message) => {
        console.log(message.content)

        if(message.content && message.author === author) {
            if(msgIndex === 0) {
                const question = message.content
                let embedQuestionComplete = new Discord.MessageEmbed()
                .setTitle('Poll Creation')
                .addField(
                    'What is the question for this poll?', 
                    'Please be as descriptive as possible while being under one sentence'
                )
                .addField('\u200B', ':white_check_mark: ' + '  ' + question)
                .setTimestamp()
                .setFooter('type quit to end poll creation')

            initMsg.edit(embedQuestionComplete)
            msgIndex++

            } else if (msgIndex === 1) {
                let embedSetOptions = new Discord.MessageEmbed()
                    .setTitle('Poll Creation')
                    .addField(
                        'Choose the options or answer for the poll', 
                        'Choose a preset from the list below, or create your own with a comma seperated list'
                    )
                    .addField('\u200B', optStr)
                    .addField('\u200B', '\u200B')
                    .addField('Create your own options example:', 'zebra, lion, turtle')
                    .setTimestamp()
                    .setFooter('type quit to end poll creation')

                var optionsMsg = message.channel.send(embedSetOptions)
                msgIndex++

            } else if (msgIndex === 2) {
                if (message.content === 1) {
                    return presetOne()
                } 
                initMsg.delete()
                optionsMsg.delete()

            }
            
        }
        
    })

}