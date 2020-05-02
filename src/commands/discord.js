const TurndownService = require('turndown')
const debug = require('debug')

const turndownService = new TurndownService()

const mess = async (message) => {
  try {
    const embed = {
      title: 'Join our discord server',
      author: {
        name: 'Discord',
        url: 'https://discordapp.com/',
        icon_url:
          'https://icon2.cleanpng.com/20180628/kvf/kisspng-discord-computer-servers-teamspeak-discord-icon-5b34991d1d3e09.8364918215301737251198.jpg',
      },
      description: turndownService.turndown(
        '<a href="https://discord.gg/7q5VcC6">Join via this link!</a>'
      ),
      color: 151511,
      footer: {
        icon_url:
          'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
        text: 'Coinbot by fosscord',
      },
    }
    message.channel.send({ embed })
  } catch (err) {
    debug(err)
  }
}

module.exports = mess
