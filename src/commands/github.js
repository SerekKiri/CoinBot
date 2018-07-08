const TurndownService = require('turndown')
const turndownService = new TurndownService()

const git = async (message, command) => {
try {
    const embed = {
    title: 'Github Repository',
    "author": {
      "name": "Github.com",
      "url": "https://www.github.com",
      "icon_url": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
    },
    description: turndownService.turndown('<a href="https://github.com/animek66/coin_bot">CoinBot repository link</a>'),
    color:  2369838,
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
      text: 'Coinbot by Kiritito & Mickson'
     }
  }
   message.channel.send({ embed })
    } catch (err) {
    console.log(err)
    }
}

module.exports = git