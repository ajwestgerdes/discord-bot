import Discord from 'discord.js'


export function poll(message, client) {
// Function to pull up a form and allow user to create a vote. Then track votes
    let content = message.content.split(' ')
    let mentions = message.mentions.users

    const pollMsg = new Discord.MessageEmbed()
	.setTitle('Poll Creation')
	.addField(
        'What is the question for this poll?', 
        'Please be as descriptive as possible while being under one sentence'
	)
	.setTimestamp()
	.setFooter('type quit to end poll creation');

return message.channel.send(pollMsg);
}