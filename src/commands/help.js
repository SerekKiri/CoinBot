const Discord = require('discord.js')

const help = (message) => {
    const embed = new Discord.RichEmbed()
        .setTitle('Available commands')
        .setColor(0x4c4cff)
        .setDescription(`
        - !help
- !coins
- !donate (We are collecting for hosting)

Legend:
        :clock1: - 1 hour
        :calendar: - 24 hours
        :calendar_spiral: - 7 days
        `)
        message.channel.send({ embed })
}

module.exports = help