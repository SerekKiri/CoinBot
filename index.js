const Discord = require('discord.js')
const debug = require('debug')('index')
const config = require('./src/config.json')
const crypto = require('./src/commands/crypto')
const coins = require('./src/commands/coins')
const help = require('./src/commands/help')
const donate = require('./src/commands/donate')
const github = require('./src/commands/github')
const discord = require('./src/commands/discord')
const token = require('./src/config.json').token

const client = new Discord.Client()

client.login(token)

client.on('ready', () => {
  console.log(
    `Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`
  )
  client.user.setPresence({
    game: { name: client.users.size + ' miners', type: 3 },
  })
})

client.on('message', async (message) => {
  if (message.content.substring(0, config.prefix.length) === config.prefix) {
    const command = message.content.slice(config.prefix.length)

    switch (command) {
      case 'coins':
        coins(message)
        break
      case 'help':
        help(message)
        break
      case 'donate':
        donate(message)
        break
      case 'github':
        github(message)
        break
      case 'discord':
        discord(message)
        break
      default:
        crypto(message, command)
    }
  }
})
