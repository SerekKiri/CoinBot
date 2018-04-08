const Discord = require('discord.js')

const config = require('./config')
const crypto = require('./commands/crypto')
const help = require('./commands/help')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Mining btc', type: 3 } })
})

client.on('message', async (message) => {
  const command = message.content.slice(config.prefix.length)

  if (command === 'help') {
    help(message)
  }

  if (command === 'btc') {
    crypto.btc(message)
  }

  if (command === 'eth') {
    crypto.eth(message)
  }

  if (command === 'ltc') {
    crypto.ltc(message)
  }

  if (command === 'bcc') {
    crypto.bcc(message)
  }

  if (command === 'lsk') {
    crypto.lsk(message)
  }

  if (command === 'game') {
    crypto.game(message)
  }

  if (command === 'dash') {
    crypto.dash(message)
  }

  if (command === 'btg') {
    crypto.btg(message)
  }

})

client.login(config.token)
