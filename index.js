const Discord = require('discord.js')

const config = require('./src/config')
const crypto = require('./src/commands/crypto')
const coins = require('./src/commands/coins')

const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Coin bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  client.user.setPresence({ game: { name: 'Paying taxes the movie', type: 3 } })
})


client.on('message', async (message) => {
  const command = message.content.slice(config.prefix.length)

  if (command === 'coins') { 
    coins(message) 
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

  if (command === 'xmr') {
    crypto.xmr(message)
  }

  if (command === 'xrp') {
    crypto.xrp(message)
  }

  if (command === 'mag') {
    crypto.mag(message)
  }

  if (command === 'doge') {
    crypto.doge(message)
  }

  if (command === 'etn') {
    crypto.etn(message)
  }

  if (command === 'bch') {
    crypto.bch(message)
  }

  if (command === 'eos') {
    crypto.eos(message)
  }

  if (command === 'iota') {
    crypto.iota(message)
  }

  if (command === 'zcash') {
    crypto.zcash(message)
  }
})

client.login(process.env.BOT_TOKEN) //process.env.BOT_TOKEN it's for hosting if you want to use him just change it to config.token