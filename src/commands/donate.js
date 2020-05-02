const TurndownService = require('turndown')
const debug = require('debug')

const turndownService = new TurndownService()

const mess = async (message) => {
  try {
    const embed = {
      title: 'Donate us by PayPal',
      author: {
        name: 'Paypal.me',
        url: 'https://www.paypal.me',
        icon_url: 'https://i.imgur.com/CxxgcQH.png',
      },
      description: turndownService.turndown(
        '<a href="https://www.paypal.me/kiritito">Donate here</a>'
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
