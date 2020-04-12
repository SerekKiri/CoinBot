const axios = require('axios')
const debug = require('debug')('crypto')
const coinIDs = require('../coinIDs.json')

function colors(data) {
  if (data.quotes.USD.percent_change_1h < 0) return 0xf44336
  return 0x00e676
}

const responder = async (message, command) => {
  try {
    const coinID = coinIDs.coinmarketcap[command]
    if (!(coinID === undefined || typeof coinID === 'undefined')) {
      const query = await axios.get(
        `https://api.alternative.me/v2/ticker/${coinID}/?convert=PLN`
      )

      const data = query.data.data[coinID]

      const embed = {
        title: `[${data.symbol}] ${data.name} price:`,
        description: ` - ${data.quotes.USD.price.toFixed(
          2
        )} USD\n- ${data.quotes.PLN.price.toFixed(
          2
        )} PLN\n**Percent Change in:**\n:clock1: :arrow_right:  ${
          data.quotes.USD.percentage_change_1h
        }% (1 hour)\n:calendar: :arrow_right:  ${
          data.quotes.USD.percentage_change_24h
        }% (24 hours)\n:calendar_spiral: :arrow_right:  ${
          data.quotes.USD.percentage_change_7d
        }% (7 days)`,
        color: colors(data),
        timestamp: new Date(data.last_updated * 1000),
        footer: {
          icon_url:
            'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
          text: 'Coin bot by Kiritito, Mickson & takidelfin',
        },
        image: {
          url: `https://s2.coinmarketcap.com/generated/sparklines/web/30d/usd/${coinID}.png`,
        },
        author: {
          name: 'Coin bot',
          url: 'https://github.com/quritto/coin_bot',
          icon_url:
            'https://cdn.discordapp.com/avatars/395240399750299658/1e9edd0c9edf5a6edb9fd36fcd693a9f.png',
        },
        fields: [
          {
            name: 'Chart from last 30 days:',
            value: '**More charts coming soon**',
          },
        ],
      }

      message.channel.send({ embed })
    } else {
      debug(`${command} is an undefined coin`)
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = responder
