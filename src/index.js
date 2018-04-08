const Discord = require('discord.js')

const config = require('./config')
const crypto = require('./commands/crypto')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Mining btc', type: 3 } })
})

client.on('message', async (message) => {
  const command = message.content.slice(config.prefix.length)
  
  if (command === 'btc') {
    crypto.btc(message)
  }
  
  if (command === 'eth') {
    crypto.eth(message)
  }


})

client.login(config.token)
