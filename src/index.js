const Discord = require('discord.js')

const config = require('./config')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Mining btc', type: 3 } })
})

client.on('message', async (message) => {
  const args = message.content.substring(config.prefix.length + 1)
  
})

client.login(config.token)
